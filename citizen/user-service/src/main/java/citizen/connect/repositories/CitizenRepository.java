package citizen.connect.repositories;

import citizen.connect.entity.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CitizenRepository extends JpaRepository<Citizen, Long> {
    Citizen findByFirstNameAndLastName(String firstName, String lastName);
    Citizen findByCINNumber(String CINNumber);
}