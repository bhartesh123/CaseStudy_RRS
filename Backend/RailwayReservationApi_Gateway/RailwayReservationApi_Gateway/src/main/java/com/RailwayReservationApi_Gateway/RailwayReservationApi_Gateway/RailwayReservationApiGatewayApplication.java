package com.RailwayReservationApi_Gateway.RailwayReservationApi_Gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
//@EnableHystrix
public class RailwayReservationApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RailwayReservationApiGatewayApplication.class, args);
	}

}
