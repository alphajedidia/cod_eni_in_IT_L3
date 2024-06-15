package citizen.connect.passport_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class PassportServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PassportServiceApplication.class, args);
	}

}
