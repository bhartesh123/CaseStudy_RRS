package com.TrainDetails.TrainDetails.Controller;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Entity.Train;
import com.TrainDetails.TrainDetails.Services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/search")
public class UserController {
    @Autowired
    private TrainRepository trainRepository;

    @Autowired
    private BookingService bookingService;
    @GetMapping("/allTrains")
    public List<Train> getAllTrains(){
        return trainRepository.findAll();
    }
    @GetMapping("/find/{trainId}")
    public Optional<Train> getTrainsById(@PathVariable String trainId){
        return trainRepository.findById(trainId);
    }
    @GetMapping("/booking/{trainId}")
    public List<Train> getTrainByBookingId(@PathVariable("trainId") String trainId){
        return this.bookingService.getTrain(trainId);
    }
}
