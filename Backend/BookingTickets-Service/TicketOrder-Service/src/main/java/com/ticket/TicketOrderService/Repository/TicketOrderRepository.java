package com.ticket.TicketOrderService.Repository;

import com.ticket.TicketOrderService.Entity.TicketOrder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketOrderRepository extends MongoRepository<TicketOrder, String>{

}
