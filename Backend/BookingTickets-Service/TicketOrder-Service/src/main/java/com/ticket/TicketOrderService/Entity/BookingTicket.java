package com.ticket.TicketOrderService.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Document(collection = "TicketsBooking")
public class BookingTicket {
	
	@Id
	private String id;
	private String trainId;
	private String seats;
	private String startStation;
	private String endStation;
	List<Train> trains=new ArrayList<>();
	public BookingTicket() {
		
	}

	public List<Train> getTrains() {
		return trains;
	}

	public void setTrains(List<Train> trains) {
		this.trains = trains;
	}

	public String getTrainId() {
		return trainId;
	}

	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}

	public BookingTicket(String id, String seats, String trainId, String startStation, String endStation, List<Train> trains) {
		this.id = id;
		this.seats = seats;
		this.trainId=trainId;
		this.startStation = startStation;
		this.endStation = endStation;
		this.trains=trains;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSeats() {
		return seats;
	}

	public void setSeats(String seats) {
		this.seats = seats;
	}

	public String getStartStation() {
		return startStation;
	}

	public void setStartStation(String startStation) {
		this.startStation = startStation;
	}

	public String getEndStation() {
		return endStation;
	}

	public void setEndStation(String endStation) {
		this.endStation = endStation;
	}


}
