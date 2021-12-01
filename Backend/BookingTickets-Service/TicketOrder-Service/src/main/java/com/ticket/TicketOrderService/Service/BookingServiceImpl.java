package com.ticket.TicketOrderService.Service;

import com.ticket.TicketOrderService.Entity.BookingTicket;
import com.ticket.TicketOrderService.Repository.TicketOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService{
    @Autowired
    private TicketOrderRepository ticketOrderRepository;

    @Override
    public BookingTicket getBooking(String id) {
        List<BookingTicket> list= ticketOrderRepository.findAll();
        return list.stream().filter(booking-> booking.getTrainId().equals(id)).findAny().orElse(null);
    }
}
