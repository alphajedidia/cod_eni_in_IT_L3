package citizen.connect.projections;

import citizen.connect.entity.Citizen;
import citizen.connect.enumeration.MaritalStatus;
import citizen.connect.enumeration.VitalStatus;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "fullProjection", types = Citizen.class)
public interface CitizenFullProjection {
    Long getCitizenId();
    String getCitizenFirstName();
    String getCitizenLastName();
    Date getDateOfBirth();
    String getBirthPlace();
    char getGender();
    MaritalStatus getMaritalStatus();
    String getNationality();
    String getEyesColor();
    int getHeight();
    Date getWeddingDate();
    String getWeddingPlace();
    String getLOT();
    String getQuarter();
    String getTown();
    String getTel();
    String getEmail();
    String getString();
    VitalStatus getVitalStatus();
    String getJob();
    Long getStatNumber();
    Long getImmat();
    Long getCINNumber();
    Date getDeliveryDate();
    String getDeliveryPlace();
}
