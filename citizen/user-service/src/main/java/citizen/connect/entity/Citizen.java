package citizen.connect.entity;

import citizen.connect.enumeration.MaritalStatus;
import citizen.connect.enumeration.VitalStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Citizen {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long citizenId;

    private String password;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private String birthPlace;
    private char gender;
    private MaritalStatus maritalStatus;
    private String nationality;
    private String eyesColor;
    private int height;
    private Date weddingDate;
    private String weddingPlace;
    private String LOT;
    private String quarter;
    private String town;
    private String tel;
    private String email;
    private String province;
    private VitalStatus vitalStatus;
    private String job;
    private Long statNumber;
    private Long immat;

    @Column(unique = true)
    private String CINNumber;
    private Date deliveryDate;
    private String deliveryPlace;

    @OneToOne
    private Citizen bride;

    @ManyToOne
    private Citizen father;

    @ManyToOne
    private Citizen mother;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<CitizenRole> roles= new ArrayList<>();

}
