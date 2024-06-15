package citizen.connect.passport_service.entity;

import citizen.connect.passport_service.enumeration.DemandStatus;
import citizen.connect.passport_service.model.Citizen;
import citizen.connect.passport_service.model.Demand;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@EqualsAndHashCode (callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Passport extends Demand {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passportId;
    private String destination;
    private Date deliveryDate;
    private String deliveryPlace;
    private String destinationAddress;
    private String reason;
    private BigDecimal price;
    private Date demandDate;
    private String coupon;
    private DemandStatus demandStatus;
    private String demandTitle;
    private String CINNumber;
    @Transient
    private Citizen citizen;
}
