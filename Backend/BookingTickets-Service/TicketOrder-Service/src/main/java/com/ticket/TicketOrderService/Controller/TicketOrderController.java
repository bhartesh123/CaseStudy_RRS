package com.ticket.TicketOrderService.Controller;

import java.util.Optional;

import com.ticket.TicketOrderService.Entity.TicketOrder;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin("http://localhost:3000")
@RequestMapping("/orders")
public class TicketOrderController {

	@Autowired
	private TicketOrderRepository ticketrepository;

	@PostMapping("/addOrder")
	public String saveBook(@RequestBody TicketOrder ticket) {
	ticketrepository.save(ticket);
	return "Booked ticket with id :  " + ticket.getId();
    }
	@GetMapping("/{id}")
	public Optional<TicketOrder> getBook(@PathVariable String id){
		return ticketrepository.findById(id);
	}
	@PutMapping("/update/{id}")
	public TicketOrder updateOrder(@PathVariable("id") String id,@RequestBody TicketOrder order ) {
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
