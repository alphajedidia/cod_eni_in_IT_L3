package citizen.connect.passport_service.model;

import citizen.connect.passport_service.enumeration.MaritalStatus;
import citizen.connect.passport_service.enumeration.VitalStatus;
import lombok.Data;

import java.util.Date;

@Data
public class Citizen {
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
    private String CINNumber;
    private Date deliveryDate;
    private String deliveryPlace;
}
