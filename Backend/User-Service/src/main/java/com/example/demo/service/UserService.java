package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;
import com.example.demo.model.UserRepository;

@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	UserRepository userrepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserModel foundedUser=userrepo.findByemail(email);
		if (foundedUser==null) {
			return null;
		}
		String email1=foundedUser.getEmail();
		String pass=foundedUser.getPassword();
		return new User(email1, pass,new ArrayList<>());
	}

}
