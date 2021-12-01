package com.TrainDetails.TrainDetails.Services;

import com.TrainDetails.TrainDetails.Entity.Train;

import java.util.List;

public interface BookingService {
    public List<Train> getTrain(String id);
}
