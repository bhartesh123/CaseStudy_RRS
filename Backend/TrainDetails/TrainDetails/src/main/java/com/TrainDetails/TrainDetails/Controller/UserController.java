package com.TrainDetails.TrainDetails.Controller;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Entity.Train;
import com.TrainDetails.TrainDetails.Services.BookingService;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

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
    private final static String TRAIN_SERVICE="train-service";
    @Autowired
    private BookingService bookingService;
    @GetMapping("/allTrains")
    @CircuitBreaker(name= TRAIN_SERVICE, fallbackMethod = "allTrainFallback")
    public List<Train> getAllTrains(){
        return trainRepository.findAll();
    }
    public String allTrainFallback(Exception e) {
    	return "This Train service is Down at this time";
    }

	/*
	 * @GetMapping("/find/{trainId}") public Optional<Train>
	 * getTrainsById(@PathVariable String trainId){ return
	 * trainRepository.findById(trainId); }
	 */
    @GetMapping("/booking/{trainId}")
    @CircuitBreaker(name= TRAIN_SERVICE, fallbackMethod = "bookingTrainFallback")
    public List<Train> getTrainByBookingId(@PathVariable("trainId") String trainId){
        return this.bookingService.getTrain(trainId);
    }
    public String bookingTrainFallback(Exception e) {
    	return "This Train service is Down at this time";
    }
    
}
