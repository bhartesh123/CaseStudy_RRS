package com.TrainDetails.TrainDetails.Repository;

import com.TrainDetails.TrainDetails.model.Train;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrainRepository extends MongoRepository<Train, String> {
}
