package com.admin.AdminContactService;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.Services.UserService;
import com.admin.AdminContactService.model.AuthenticationRequest;
import com.admin.AdminContactService.model.AuthenticationResponse;
import com.admin.AdminContactService.model.ContactModel;
import com.admin.AdminContactService.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")

public class ContactController {
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    AuthenticationManager authenticates;
    @Autowired
    UserService userService;
    @Autowired
    JwtUtils jwtUtils;




    @PostMapping("/addAdmin")
    private ResponseEntity<AuthenticationResponse> addAdmin(@RequestBody AuthenticationRequest authreq){
        ContactModel contactModel=new ContactModel();
        System.out.println(authreq);
        contactModel.setName(authreq.getName());
        contactModel.setUsername(authreq.getUsername());
        contactModel.setPassword(authreq.getPassword());
        contactModel.setMobileNumber(authreq.getMobileNumber());
        try{
            contactRepository.save(contactModel);
        }catch (Exception e){
            return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse("Error during Adding Admin "), HttpStatus.OK);
        }
        return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse("Admin Added Successfully "+authreq.getName()),HttpStatus.OK);
    }
//    public String addContact(@RequestBody ContactModel contactModel){
//        contactRepository.save(contactModel);
//        return "New Contact is Added to DataBase : "+ contactModel.getId();
//    }
    @PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authreq){
		String email=authreq.getUsername();
		String password= authreq.getPassword();
		System.out.println(authreq);
		try {
			authenticates.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		
		UserDetails userdetails= userService.loadUserByUsername(email);
		
		String jwt = jwtUtils.generateToken(userdetails);
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	


    @GetMapping("/allAdmin")
    public List<ContactModel> getAllContact(){
        return contactRepository.findAll();
    }
    @GetMapping("/allAdmin/{id}")
    public Optional<ContactModel> getContactById(@PathVariable String id){
        return contactRepository.findById(id);
    }
    @GetMapping("/deleteAdmin/{id}")
    public String deleteContact(@PathVariable String id){
        contactRepository.deleteById(id);
        return id+" This Contact is deleted";
    }
}
