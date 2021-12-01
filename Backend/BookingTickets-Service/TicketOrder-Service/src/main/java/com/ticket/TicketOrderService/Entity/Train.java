package com.ticket.TicketOrderService.Entity;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document(collection = "Trains")
public class Train {
   // @Id
    private String trainId;
    private String trainName;
    private String startStation;
    private String endStation;

    public Train(String trainId, String trainName, String startStation, String endStation) {
        this.trainId = trainId;
        this.trainName = trainName;
        this.startStation = startStation;
        this.endStation = endStation;
    }

    public Train() {
    }

    public String getTrainId() {
        return trainId;
    }

    public void setTrainId(String trainId) {
        this.trainId = trainId;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
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
