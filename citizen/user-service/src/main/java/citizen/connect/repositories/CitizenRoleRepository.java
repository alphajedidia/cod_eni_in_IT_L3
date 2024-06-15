package citizen.connect.repositories;

import citizen.connect.entity.CitizenRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CitizenRoleRepository extends JpaRepository<CitizenRole, Long> {
    CitizenRole findByRoleName(String roleName);
}
