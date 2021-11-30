package com.TrainDetails.TrainDetails.Resources;

import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.model.Train;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.ast.OpAnd;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/trains")
public class TrainController {
    @Autowired
    private TrainRepository trainRepository;
    @PostMapping("/addTrain")
    public String addTrain(@RequestBody Train trainId){
        trainRepository.save(trainId);
        return "New Train added with ID : "+trainId.getTrainName();
    }
    @GetMapping("/{trainId}")
    public Optional<Train> getTrain(@PathVariable String trainId){
        return trainRepository.findById(trainId);
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
