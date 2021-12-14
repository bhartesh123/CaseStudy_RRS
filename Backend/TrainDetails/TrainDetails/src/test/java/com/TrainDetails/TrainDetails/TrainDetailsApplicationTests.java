package com.TrainDetails.TrainDetails;

import com.TrainDetails.TrainDetails.Entity.Train;
import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Services.TrainService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@RunWith(SpringRunner.class)
class TrainDetailsApplicationTests {

	@Autowired
	private TrainService trainService;

	@MockBean
	private TrainRepository trainrepository;

	@Test
	public void getTrainTest() {
		when(trainrepository.findAll()).thenReturn(Stream
				.of(new Train("12","Rajdhani local","Dadar","Kolhapur"), new Train("13","Jagannath Express","Banglore","Mumbai"),new Train("12","Rajdhani local","Dadar","Kolhapur")).collect(Collectors.toList()));
		System.out.println();
		assertEquals(3,trainService.getTrain().size());
	}
	@Test
	public void saveTrainTest() {
		Train train = new Train("877","Sonarpur Local","Delhi","Mumbai");
		when(trainrepository.save(train)).thenReturn(train);
		assertEquals(train, trainService.addTrain(train));

	}
	@Test
	public void deleteUserTest() {
		Train train = new Train("12","Howrah local","Jaipur","Kolhapur");
		trainService.deleteTrain(train);
		verify(trainrepository, times(1)).delete(train);
	}
	@Test
	void contextLoads() {
	}

}
