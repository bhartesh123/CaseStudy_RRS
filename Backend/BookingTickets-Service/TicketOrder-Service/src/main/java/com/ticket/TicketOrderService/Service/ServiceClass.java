package com.ticket.TicketOrderService.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
@Service
public class ServiceClass {
	@Autowired
	private TicketOrderRepository ticketOrderRepository;

	public BookingTicket addTicket(BookingTicket bookingTicket) {
			return ticketOrderRepository.save(bookingTicket); 
	}
	
	public List<BookingTicket> getAllBooking() {
		
		List<BookingTicket> booking=ticketOrderRepository.findAll();
		System.out.println(booking);
		return booking;
	}
}
