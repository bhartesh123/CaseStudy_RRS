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
	private String nooftickets;
	private String source;
	private String destination;
	List<Train> trains=new ArrayList<>();
	public BookingTicket(String id, String trainId, String nooftickets, String source, String destination) {
		//super();
		this.id = id;
		this.trainId = trainId;
		this.nooftickets = nooftickets;
		this.source = source;
		this.destination = destination;
	}

	public BookingTicket() {
		
	}

	
	  public List<Train> getTrains() { return trains; }
	  
	  public void setTrains(List<Train> trains) { this.trains = trains; }
	 
	public String getTrainId() {
		return trainId;
	}

	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}
	
	  public BookingTicket(String id, String nooftickets, String trainId, String source, String destination, List<Train> trains) { 
		  this.id = id;
		  this.nooftickets = nooftickets; 
		  this.trainId=trainId; 
		  this.source = source;
		  this.destination = destination; 
		  this.trains=trains; 
	  }
	 



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getnooftickets() {
		return nooftickets;
	}

	public void setnooftickets(String nooftickets) {
		this.nooftickets = nooftickets;
	}

	public String getsource() {
		return source;
	}

	public void setsource(String source) {
		this.source = source;
	}

	public String getdestination() {
		return destination;
	}

	public void setdestination(String destination) {
		this.destination = destination;
	}


}
