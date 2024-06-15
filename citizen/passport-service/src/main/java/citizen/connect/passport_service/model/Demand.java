package citizen.connect.passport_service.model;

import citizen.connect.passport_service.enumeration.DemandStatus;
import jakarta.persistence.Transient;

import java.util.Date;

public class Demand {
    private Date demandDate;
    private String coupon;
    private DemandStatus demandStatus;
    private String demandTitle;
    private String CINNumber;
    @Transient
    private Citizen citizen;
}
