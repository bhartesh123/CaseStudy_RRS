package com.ticket.TicketOrderService.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/helloTicketOrder")
	public String hello( ) {
		return "hello from Ticket Order Service";
	}
	

}
