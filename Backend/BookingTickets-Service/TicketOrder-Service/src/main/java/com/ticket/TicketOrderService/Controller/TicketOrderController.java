package com.ticket.TicketOrderService.Controller;

import java.util.List;
import java.util.Optional;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Entity.Train;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
import com.ticket.TicketOrderService.Service.BookingService;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
//@CrossOrigin("http://localhost:3000")
@RequestMapping("/booking")
public class TicketOrderController {

	@Autowired
	private TicketOrderRepository ticketrepository;
	@Autowired
	private BookingService bookingService;
	@Autowired
	private RestTemplate restTemplate;
	private final static String BOOKING_SERVICE="booking-service";

	@PostMapping("/addBooking")
	@CircuitBreaker(name = "BOOKING_SERVICE", fallbackMethod = "addBookingFallBack")
	public String saveBook(@RequestBody BookingTicket ticket) {
		ticketrepository.save(ticket);
		return "Booked ticket with id :  " + ticket.getId()+"  And Train ID is "+ticket.getTrainId();
    }
	public String addBookingFallBack(Exception e) {
		return "Booking service is down at this time please try later";
	}



	@RequestMapping("/booked/{trainId}")
	@CircuitBreaker(name = "BOOKING_SERVICE", fallbackMethod = "getBookingFallBack")
	public BookingTicket getBooking(@PathVariable("trainId") String trainId){
		BookingTicket bookingTicket=this.bookingService.getBooking(trainId);
		//System.out.println(bookingTicket.getTrainId());
		//http://localhost:9030/trains/all
		List booking=this.restTemplate.getForObject("http://train-service/search/booking/"+trainId, List.class);
		bookingTicket.setTrains(booking);
		return bookingTicket;
	}
	public String getBookingFallBack(Exception e) {
		return "Train service is down at this time please try later";
	}







	@PutMapping("/update/{id}")
	public BookingTicket updateOrder(@PathVariable("id") String id, @RequestBody BookingTicket order ) {
		order.setId(id);
		ticketrepository.save(order);
		return order;
	}
		
	 @DeleteMapping("/del/{id}")
	 public String deleteOrder (@PathVariable String id) {
	  ticketrepository.deleteById(id);
		return "Order deleted with id : "+id;
		}
	
	

}
