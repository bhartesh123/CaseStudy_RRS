package com.TrainDetails.TrainDetails.Resources;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Entity.Train;
import com.TrainDetails.TrainDetails.Services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/trains")
public class TrainController {
    @Autowired
    private TrainRepository trainRepository;
    @Autowired
    private BookingService bookingService;
    @PostMapping("/addTrain")
    public String addTrain(@RequestBody Train trainId){
        trainRepository.save(trainId);
        return "New Train added with Name : "+trainId.getTrainName()+" and TrainID is : "+trainId.getTrainId();
    }
    @GetMapping("/search/{trainId}")
    public Optional<Train> getTrain(@PathVariable String trainId){
        return trainRepository.findById(trainId);
    }
    @GetMapping("/booking/{trainId}")
    public List<Train> getTrainByBookingId(@PathVariable("trainId") String trainId){
        return this.bookingService.getTrain(trainId);
    }
    @GetMapping("/all")
    public List<Train> getAllTrains(){
        return trainRepository.findAll();
    }
    @GetMapping("/delete/{trainId}")
    public String deleteTrain(@PathVariable String trainId){
        trainRepository.deleteById(trainId);
        return "Train with ID "+trainId+" is Deleted";
    }

    @PutMapping("/update/{trainId}")
    public Train updateTrain(@PathVariable("trainId") String trainId,@RequestBody Train t){
        t.setTrainId(trainId);
        trainRepository.save(t);
        return t;
    }

}
