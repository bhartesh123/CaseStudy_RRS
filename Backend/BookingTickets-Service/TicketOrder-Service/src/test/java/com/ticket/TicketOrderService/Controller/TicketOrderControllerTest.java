package com.ticket.TicketOrderService.Controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

import static org.junit.jupiter.api.Assertions.assertEquals;
import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
import com.ticket.TicketOrderService.Service.BookingService;
import com.ticket.TicketOrderService.Service.ServiceClass;
@SpringBootTest
@RunWith(SpringRunner.class)
class TicketOrderControllerTest {
	@MockBean
	private TicketOrderRepository ticketOrderRepository;
	//@Autowired
	//private TicketOrderController ticketOrderController;
	@Autowired
	private BookingService bookingService;
	@Autowired
	private ServiceClass serviceClass;
	
	/*
	 * @BeforeAll static void setUpBeforeClass() throws Exception { }
	 * 
	 * @AfterAll static void tearDownAfterClass() throws Exception { }
	 * 
	 * @BeforeEach void setUp() throws Exception { }
	 * 
	 * @AfterEach void tearDown() throws Exception { }
	 */
	@Test
	void testSaveBook() {
		//fail("Not yet implemented");
		//BookingTicket bookingTicket=new BookingTicket("1", "162", "3", "Kolhapur", "Miraj");
		BookingTicket bookingTicket=new BookingTicket("1", "162", "3", "Kolhapur", "Miraj");
		when(ticketOrderRepository.save(bookingTicket)).thenReturn(bookingTicket);
		assertEquals(bookingTicket,serviceClass.addTicket(bookingTicket));		
	}

	@Test
	void testAllBooking() {
		
		//fail("Not yet implemented");
		when(ticketOrderRepository.findAll()).thenReturn(Stream.of(new BookingTicket("12", "1345", "2", "Miraj", "Dadar"),new BookingTicket("14", "1345", "2", "Miraj", "Dadar"),new BookingTicket("13", "1345", "2", "Miraj", "Dadar")).collect(Collectors.toList()));
		assertEquals(3, serviceClass.getAllBooking().size());
		//(Expected , Actual)
	}

	/*
	 * @Test void testUpdateOrder() { //fail("Not yet implemented"); }
	 * 
	 * @Test void testDeleteOrder() { //fail("Not yet implemented"); }
	 */

}
