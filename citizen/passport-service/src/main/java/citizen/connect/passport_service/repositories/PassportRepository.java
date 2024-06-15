package citizen.connect.passport_service.repositories;

import citizen.connect.passport_service.entity.Passport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PassportRepository extends JpaRepository<Passport, Long> {
}
