package com.admin.AdminContactService.Services;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.model.ContactModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private ContactRepository contactRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ContactModel foundUser= contactRepository.findByusername(username);
        if(foundUser==null){
            return null;
        }
        String user=foundUser.getUsername();
        String pass=foundUser.getPassword();

        return new User(user, pass, new ArrayList<>());
    }
}
