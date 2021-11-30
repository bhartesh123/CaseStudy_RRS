/*package com.admin.AdminContactService.Services;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;
    public Contact addContact(Contact contact){
        return contactRepository.save(contact);

    }

    public List<Contact> getContact(){
        List<Contact> contact=contactRepository.findAll();
        System.out.println("Getting Data from DataBase: "+contact);
        return contact;
    }

    public Optional<Contact> getContactById(String id){
        return contactRepository.findById(id);
    }

    public void deleteContact(Contact contact){
        contactRepository.delete(contact);
    }
}
*/