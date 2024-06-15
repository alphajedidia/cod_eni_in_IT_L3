package citizen.connect.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
@Builder
public class Privilege {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long privilegeId;
    private String privilegeName;
}
