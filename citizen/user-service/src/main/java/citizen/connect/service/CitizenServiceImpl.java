package citizen.connect.service;

import citizen.connect.dto.CitizenConnected;
import citizen.connect.dto.CitizenCreateDto;
import citizen.connect.dto.CitizenDto;
import citizen.connect.entity.Citizen;
import citizen.connect.entity.CitizenRole;
import citizen.connect.exception.RessourceNotFoundException;
import citizen.connect.repositories.CitizenRepository;
import citizen.connect.repositories.CitizenRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CitizenServiceImpl implements CitizenService {

    private final CitizenRepository citizenRepository;
    private final CitizenRoleRepository citizenRoleRepository;
//    private final JwtDecoder jwtDecoder;

    @Autowired private PasswordEncoder passwordEncoder;

    public CitizenServiceImpl(CitizenRepository citizenRepository, CitizenRoleRepository citizenRoleRepository,PasswordEncoder passwordEncoder) {
        this.citizenRepository = citizenRepository;
        this.citizenRoleRepository = citizenRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Citizen addCitizen(CitizenCreateDto citizen) {
        Citizen bride = citizenRepository.findByFirstNameAndLastName(citizen.getBrideFirstName(), citizen.getLastName());
        Citizen father = citizenRepository.findByFirstNameAndLastName(citizen.getFatherFirstName(), citizen.getFatherLastName());
        Citizen mother = citizenRepository.findByFirstNameAndLastName(citizen.getMotherFirstName(), citizen.getMotherLastName());
        Citizen newCitizen = Citizen.builder()
                .firstName(citizen.getFirstName())
                .lastName(citizen.getLastName())
                .dateOfBirth(citizen.getDateOfBirth())
                .birthPlace(citizen.getBirthPlace())
                .email(citizen.getEmail())
                .password(passwordEncoder.encode(citizen.getPassword()))
                .eyesColor(citizen.getEyesColor())
                .gender(citizen.getGender())
                .height(citizen.getHeight())
                .job(citizen.getJob())
                .LOT(citizen.getLOT())
                .immat(citizen.getImmat())
                .maritalStatus(citizen.getMaritalStatus())
                .deliveryDate(citizen.getDeliveryDate())
                .nationality(citizen.getNationality())
                .province(citizen.getProvince())
                .quarter(citizen.getQuarter())
                .tel(citizen.getTel())
                .CINNumber(citizen.getCINNumber())
                .deliveryPlace(citizen.getDeliveryPlace())
                .statNumber(citizen.getStatNumber())
                .town(citizen.getTown())
                .vitalStatus(citizen.getVitalStatus())
                .weddingPlace(citizen.getWeddingPlace())
                .weddingDate(citizen.getWeddingDate())
                .bride(bride)
                .mother(mother)
                .father(father)
                .build();

        return citizenRepository.save(newCitizen);
    }

    @Override
    public void addRoleToCitizen(String CINNumber, String roleName) {
        Citizen citizen = citizenRepository.findByCINNumber(CINNumber);
        CitizenRole role = citizenRoleRepository.findByRoleName(roleName);
        citizen.getRoles().add(role);
    }

    @Override
    public CitizenDto findCitizenByCINNumber(String CINNumber) {
        Citizen citizen = citizenRepository.findByCINNumber(CINNumber);
        return CitizenDto.builder()
                .CINNumber(citizen.getCINNumber())
                .firstName(citizen.getFirstName())
                .lastName(citizen.getLastName())
                .dateOfBirth(citizen.getDateOfBirth())
                .birthPlace(citizen.getBirthPlace())
                .email(citizen.getEmail())
                .eyesColor(citizen.getEyesColor())
                .nationality(citizen.getNationality())
                .height(citizen.getHeight())
                .gender(citizen.getGender())
                .maritalStatus(citizen.getMaritalStatus())
                .tel(citizen.getTel())
                .vitalStatus(citizen.getVitalStatus())
                .quarter(citizen.getQuarter())
                .town(citizen.getTown())
                .LOT(citizen.getLOT())
                .province(citizen.getProvince())
                .job(citizen.getJob())
                .statNumber(citizen.getStatNumber())
                .immat(citizen.getImmat())
                .weddingDate(citizen.getWeddingDate())
                .weddingPlace(citizen.getWeddingPlace())
                .deliveryDate(citizen.getDeliveryDate())
                .deliveryPlace(citizen.getDeliveryPlace())
                .fatherFirstName(citizen.getFather().getFirstName())
                .fatherLastName(citizen.getLastName())
                .brideFirstName(citizen.getBride().getFirstName())
                .brideLastName(citizen.getBride().getLastName())
                .motherFirstName(citizen.getMother().getFirstName())
                .motherLastName(citizen.getMother().getLastName())
                .citizenId(citizen.getCitizenId())
                .build();
    }

    @Override
    public List<Citizen> getAllCitizens(){
        return citizenRepository.findAll();
    }

//    @Override
//    public CitizenConnected getCitizenConnected(String token) throws RessourceNotFoundException {
//        Jwt decodeJ = jwtDecoder.decode(token);
//        Citizen citizen = citizenRepository.findById(Long.valueOf(decodeJ.getId())).orElse(null);
//        assert(citizen != null);
//        return CitizenConnected.builder()
//                .citizenId(citizen.getCitizenId())
//                .email(citizen.getEmail())
//                .firstName(citizen.getFirstName())
//                .lastName(citizen.getLastName())
//                .gender(citizen.getGender())
//                .eyesColor(citizen.getEyesColor())
//                .height(citizen.getHeight())
//                .job(citizen.getJob())
//                .LOT(citizen.getLOT())
//                .immat(citizen.getImmat())
//                .CINNumber(citizen.getCINNumber())
//                .deliveryPlace(citizen.getDeliveryPlace())
//                .deliveryDate(citizen.getDeliveryDate())
//                .maritalStatus(citizen.getMaritalStatus())
//                .quarter(citizen.getQuarter())
//                .tel(citizen.getTel())
//                .nationality(citizen.getNationality())
//                .statNumber(citizen.getStatNumber())
//                .town(citizen.getTown())
//                .province(citizen.getProvince())
//                .vitalStatus(citizen.getVitalStatus())
//                .dateOfBirth(citizen.getDateOfBirth())
//                .birthPlace(citizen.getBirthPlace())
//                .build();
//    }
}
