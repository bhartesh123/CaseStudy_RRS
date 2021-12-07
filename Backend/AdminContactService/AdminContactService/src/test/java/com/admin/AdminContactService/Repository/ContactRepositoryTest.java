package com.admin.AdminContactService.Repository;

import com.admin.AdminContactService.Services.ContactService;
import com.admin.AdminContactService.model.Contact;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class ContactRepositoryTest {
    @MockBean
    private ContactRepository contactRepository;
    @Autowired
    private ContactService contactService;
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    public void getContactTest() {
        when(contactRepository.findAll()).thenReturn(Stream
                .of(new Contact("12","Bhartesh","9130551008"), new Contact("69","Mrunal","9865432183")).collect(Collectors.toList()));
        assertEquals(2,contactService.getContact().size());
    }
    @Test
    public void saveContactTest() {
        Contact contact = new Contact("999", "Glenn", "9864321894");
        when(contactRepository.save(contact)).thenReturn(contact);
        assertEquals(contact, contactService.addContact(contact));

    }


}