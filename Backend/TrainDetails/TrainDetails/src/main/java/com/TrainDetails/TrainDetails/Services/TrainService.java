package com.TrainDetails.TrainDetails.Services;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Entity.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TrainService implements BookingService{
    @Autowired
    private TrainRepository trainRepository;

    public Train addTrain(Train train){
        return trainRepository.save(train);
    }
    public List<Train> getTrain(){

        List<Train> train=trainRepository.findAll();
        System.out.println("Getting Trains from DataBase "+train );
        return train;
    }
    public Optional<Train> getTrainBtId(String Id){
        return trainRepository.findById(Id);
    }
    public void deleteTrain(Train train){
        trainRepository.delete(train);
    }

    @Override
    public List<Train> getTrain(String id) {
        List<Train> train=trainRepository.findAll();
        return train.stream().filter(tt->tt.getTrainId().equals(id)).collect(Collectors.toList());
    }
}
