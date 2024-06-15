package citizen.connect.service;

import citizen.connect.model.CitizenDetails;
import citizen.connect.repositories.CitizenRepository;
import citizen.connect.entity.Citizen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * UserInfoService provides user-related services including loading user details
 * and managing user data in the repository.
 */
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private CitizenRepository citizenRepository;
    // Loads a user's details given their userName.
    @Override
    public CitizenDetails loadUserByUsername(String CINNumber) throws UsernameNotFoundException {
        Citizen user = citizenRepository.findByCINNumber(CINNumber);
        return mapToCDetails(user);
    }

    private CitizenDetails mapToCDetails(Citizen citizen){
        return new CitizenDetails(citizen);
    }

    // Adds a new user to the repository and encrypting password before saving it.
//    public String addUser(Citizen user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        citizenRepository.save(user);
//        return "user added successfully";
//    }


}
