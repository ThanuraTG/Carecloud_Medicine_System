package com.carecloud.carecloudehr;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.carecloud.carecloudehr.model")
@EnableJpaRepositories(basePackages = "com.carecloud.carecloudehr.repository")
@ComponentScan(basePackages = "com.carecloud.carecloudehr")
public class CarecloudehrApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarecloudehrApplication.class, args);
	}
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
