package com.admin.AdminContactService.Services;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.model.ContactModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;
    public ContactModel addContact(ContactModel contactModel){
        return contactRepository.save(contactModel);

    }

    public List<ContactModel> getContact(){
        List<ContactModel> contactModel =contactRepository.findAll();
        System.out.println("Getting Data from DataBase: "+ contactModel);
        return contactModel;
    }

    public Optional<ContactModel> getContactById(String id){
        return contactRepository.findById(id);
    }

    public void deleteContact(ContactModel contactModel){
        contactRepository.delete(contactModel);
    }
}
