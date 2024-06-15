package citizen.connect.service;

import citizen.connect.dto.CitizenConnected;
import citizen.connect.dto.CitizenCreateDto;
import citizen.connect.dto.CitizenDto;
import citizen.connect.entity.Citizen;
import citizen.connect.entity.CitizenRole;
import citizen.connect.exception.RessourceNotFoundException;

import java.util.List;

public interface CitizenService {
    Citizen addCitizen(CitizenCreateDto citizen);
    void addRoleToCitizen(String CINNumber, String roleName);
    CitizenDto findCitizenByCINNumber(String CINNumber);
    List<Citizen> getAllCitizens();
//    CitizenConnected getCitizenConnected(String token) throws RessourceNotFoundException;
}