package citizen.connect.passport_service.service;

import citizen.connect.passport_service.model.Citizen;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-service")
public interface CitizenClient {
    @GetMapping("/citizen/{cin}")
    Citizen findByCINNumber(@PathVariable String cin);
}
