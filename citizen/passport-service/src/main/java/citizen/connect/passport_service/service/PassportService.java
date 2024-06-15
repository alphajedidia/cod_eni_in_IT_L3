package citizen.connect.passport_service.service;

import citizen.connect.passport_service.dto.PassportCreateDto;
import citizen.connect.passport_service.dto.PassportDeliveryDto;
import citizen.connect.passport_service.entity.Passport;
import citizen.connect.passport_service.enumeration.DemandStatus;

public interface PassportService {
    Passport createPassport(PassportCreateDto passportCreateDto);
    Passport updateDemandStatus(DemandStatus demandStatus, Long passportId);
    Passport addCouponToDemand(String coupon, Long passportId);
    Passport deliverPassport(Long passportId, PassportDeliveryDto passportDeliveryDto);
    Passport generateTicket(Long passportId, String CINNumber);
}
