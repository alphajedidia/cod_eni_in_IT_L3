package citizen.connect.web;

import citizen.connect.dto.CitizenConnected;
import citizen.connect.dto.CitizenCreateDto;
import citizen.connect.dto.CitizenDto;
import citizen.connect.entity.Citizen;
import citizen.connect.exception.RessourceNotFoundException;
import citizen.connect.service.CitizenService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/citizen")
public class CitizenController {
    private final CitizenService citizenService;

    public CitizenController(CitizenService citizenService) {
        this.citizenService = citizenService;
    }

    @PostMapping ("")
    @ResponseStatus(HttpStatus.CREATED)
    public Citizen addCitizen(@RequestBody CitizenCreateDto citizen) {
        return citizenService.addCitizen(citizen);
    }

    @GetMapping("")
    public List<Citizen> getAllCitizens() {
        return citizenService.getAllCitizens();
    }

    @GetMapping("/{cin}")
    public CitizenDto findCitizenByCINNumber(@PathVariable String cin) {
        return citizenService.findCitizenByCINNumber(cin);
    }

    @PostMapping("/{cin}/{roleName}")
    public void addRoleToCitizen(@PathVariable String cin, @PathVariable String roleName){
        citizenService.addRoleToCitizen(cin, roleName);
    }

//    @GetMapping("/information")
//    @ResponseStatus(HttpStatus.OK)
//    public CitizenConnected getCitizenConnected(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String token) throws RessourceNotFoundException {
//        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
//            String accessToken = token.substring(7);
//            return citizenService.getCitizenConnected(accessToken);
//        }
//        return null;
//    }
}
