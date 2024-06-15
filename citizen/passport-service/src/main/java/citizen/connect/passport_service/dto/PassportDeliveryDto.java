package citizen.connect.passport_service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor @Builder
public class PassportDeliveryDto {
    private Date deliveryDate;
    private String deliveryPlace;
}
