package citizen.connect.dto;

import citizen.connect.enumeration.MaritalStatus;
import citizen.connect.enumeration.VitalStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
public class CitizenDto {
    private Long citizenId;
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
    private String CINNumber;
    private Date deliveryDate;
    private String deliveryPlace;
    private String fatherFirstName;
    private String motherFirstName;
    private String brideFirstName;
    private String fatherLastName;
    private String motherLastName;
    private String brideLastName;

}
