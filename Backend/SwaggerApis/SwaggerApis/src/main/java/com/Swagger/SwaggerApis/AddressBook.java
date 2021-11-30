package com.Swagger.SwaggerApis;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
public class AddressBook {
    ConcurrentHashMap<String, Contact> contact=new ConcurrentHashMap<>();
    @GetMapping("/{id}")
    @ApiOperation(value = "This is to Find Contacts by id", notes = "Enter proper ID",response = Contact.class)
    public Contact getContact(@PathVariable String id){
        return contact.get(id);
    }
    @GetMapping("/all")
    @ApiOperation(value = "This is to Find All Contacts ", notes = "Enter proper ID",response = Contact.class)
    public List<Contact> getAllContacts(){
        return new ArrayList<Contact>(contact.values());
    }
    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contacts){
        contact.put(contacts.getId(),contacts);
        return contacts;
    }
}
