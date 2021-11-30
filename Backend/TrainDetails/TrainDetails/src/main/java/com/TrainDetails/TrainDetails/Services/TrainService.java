package com.TrainDetails.TrainDetails.Services;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.model.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainService {
    @Autowired
    private TrainRepository trainRepository;

    public Train addTrain(Train train){
        return trainRepository.save(train);
    }
    public List<Train> getContact(){

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
}
