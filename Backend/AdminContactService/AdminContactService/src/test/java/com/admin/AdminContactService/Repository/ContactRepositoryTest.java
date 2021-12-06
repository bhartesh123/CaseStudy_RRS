package com.admin.AdminContactService.Repository;

import com.admin.AdminContactService.model.Contact;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class ContactRepositoryTest {
    @Autowired
    private ContactRepository contactRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void isContactExists() {
        //Contact contact=new Contact("12","Mrunal","987654321");
    //    contactRepository.save(contact);
       Optional<Contact> actual=contactRepository.findById("1");
      ;

    }
}