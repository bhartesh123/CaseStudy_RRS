package com.ticket.TicketOrderService.Repository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Service.BookingService;
import com.ticket.TicketOrderService.Service.ServiceClass;
@SpringBootTest
@RunWith(SpringRunner.class)
class TicketOrderRepositoryTest {
	@MockBean
	private TicketOrderRepository ticketOrderRepository;
	@Autowired
	private ServiceClass serviceClass;
	@Test
	void testSaveBook() {
		//fail("Not yet implemented");
		//BookingTicket bookingTicket=new BookingTicket("1", "162", "3", "Kolhapur", "Miraj");
		BookingTicket bookingTicket=new BookingTicket("1", "162", "3", "Kolhapur", "Miraj");
		when(ticketOrderRepository.save(bookingTicket)).thenReturn(bookingTicket);
		assertEquals(bookingTicket,serviceClass.addTicket(bookingTicket));		
	}
	@Test
	void allBooking() {
		
	}
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void test() {
		//fail("Not yet implemented");
	}

}
