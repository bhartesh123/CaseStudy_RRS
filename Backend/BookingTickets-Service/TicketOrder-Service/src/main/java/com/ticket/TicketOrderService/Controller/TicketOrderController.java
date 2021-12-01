package com.ticket.TicketOrderService.Controller;

import java.util.List;
import java.util.Optional;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Entity.Train;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
import com.ticket.TicketOrderService.Service.BookingService;
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


	@PostMapping("/addBooking")
	public String saveBook(@RequestBody BookingTicket ticket) {
	ticketrepository.save(ticket);
	return "Booked ticket with id :  " + ticket.getId()+"And Train ID is "+ticket.getTrainId();
    }




	@GetMapping("/booked/{trainId}")
	public BookingTicket getBooking(@PathVariable("trainId") String trainId){
		BookingTicket bookingTicket=this.bookingService.getBooking(trainId);
		//System.out.println(bookingTicket.getTrainId());
		//http://localhost:9030/trains/all
		List booking=this.restTemplate.getForObject("http://train-service/trains/booking/"+trainId, List.class);
		bookingTicket.setTrains(booking);
		return bookingTicket;
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
