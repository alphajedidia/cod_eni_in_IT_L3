package citizen.connect.passport_service.dto;

import citizen.connect.passport_service.enumeration.DemandStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PassportCreateDto {
    private String destination;
    private String destinationAddress;
    private String reason;
    private BigDecimal price;
    private Date demandDate;
    private String coupon;
    private DemandStatus demandStatus;
    private String demandTitle;
    private String CINNumber;
}
