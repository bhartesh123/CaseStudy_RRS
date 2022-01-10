package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.*;
import com.example.demo.service.UserService;
import com.example.demo.utils.JwtUtils;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {

	
	
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	AuthenticationManager authenticates;
	
	@Autowired
	UserService userservice;
	
	@Autowired
	JwtUtils jwtutil;
	
	@PostMapping("/subs")
	private ResponseEntity<AuthenticationResponse>subscribeClient(@RequestBody AuthenticationRequest authreq){
		UserModel usermodel =new UserModel();
		System.out.println(authreq);
//		UserModel oldusermodel=new UserModel();
//		oldusermodel=userrepo.findByusername(authreq.getUsername());
//		try {
//			
//			if (oldusermodel.getUsername() == authreq.getUsername()) {
//				throw new Exception("Username already present");
//			}
//					
//		}
//		catch(Exception e) {
//			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
//					("Username must be unique ") , HttpStatus.OK);
//		}
		
		usermodel.setUsername(authreq.getUsername());
		usermodel.setPassword(authreq.getPassword());
		usermodel.setMobileNumber(authreq.getMobileNumber());
		usermodel.setEmail(authreq.getEmail());
		
		
		try {
			userrepo.save(usermodel);
		}
		catch(Exception e){
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
					("Error during subscription ") , HttpStatus.OK);
		}
		
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				("Successful subs for client " +authreq.getUsername()), HttpStatus.OK);
//		return ResponseEntity.ok(new AuthenticationResponse());
	}
	
	
	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authreq){
		String email=authreq.getEmail();
		String password= authreq.getPassword();
		System.out.println(authreq);
		
		authenticates.authenticate(new UsernamePasswordAuthenticationToken(email, password));
				
		
		
		UserDetails userdetails= userservice.loadUserByUsername(email);
		
		String jwt = jwtutil.generateToken(userdetails);
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	@GetMapping("/test")
	private String testingtoken() {
		try {
			return "Testing Successful...!";	
		}
		catch(Exception e) {
			return "Please login first..!";
		}
	}
	
	@GetMapping("/dashboard")
	private String dashboard() {
		return "Welcome to dashboard...!";
	}
	@GetMapping("/user")
	public List<UserModel> getAllContact(){
        return userrepo.findAll();
    }
	
	
	
}
