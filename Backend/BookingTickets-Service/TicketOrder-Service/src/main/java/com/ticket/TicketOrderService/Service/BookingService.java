package com.ticket.TicketOrderService.Service;
import com.ticket.TicketOrderService.Entity.BookingTicket;

public interface BookingService {
    public BookingTicket getBooking(String trainId);
}
