package com.ticket.TicketOrderService.Repository;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketOrderRepository extends MongoRepository<BookingTicket, String>{

}
