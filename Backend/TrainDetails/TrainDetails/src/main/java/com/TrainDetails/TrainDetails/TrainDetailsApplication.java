package com.TrainDetails.TrainDetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TrainDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainDetailsApplication.class, args);
	}

}
