package com.Swagger.SwaggerApis;

import io.swagger.annotations.ApiOperation;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.RequestHandler;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collection;
import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
public class SwaggerApisApplication {
	public static void main(String[] args) {
		SpringApplication.run(SwaggerApisApplication.class, args);
	}
	@Bean
	public Docket docket(){
		//Return the prepared Docket Instance

		return new Docket(DocumentationType.SWAGGER_2)
				.select()  // ApiSelectorBuilder
				.paths(PathSelectors.ant("/api/*"))
				.apis(RequestHandlerSelectors.basePackage("com.Swagger"))
				.build()
				.apiInfo(apiDetails());
	}

	public ApiInfo apiDetails(){
		return new ApiInfo("This is Bhartesh's Swagger API","Sample ApI","1.0","Free to use",new springfox.documentation.service.Contact("Bhartesh Surwashi","https://web.whatsapp.com/","bharteshsurwashi1914@gmail.com"),"Free to use","https://web.whatsapp.com/", Collections.emptyList());
	}
}