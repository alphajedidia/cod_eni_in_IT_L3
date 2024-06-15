package citizen.connect.passport_service.service;

import citizen.connect.passport_service.repositories.PassportRepository;
import citizen.connect.passport_service.dto.PassportCreateDto;
import citizen.connect.passport_service.dto.PassportDeliveryDto;
import citizen.connect.passport_service.entity.Passport;
import citizen.connect.passport_service.enumeration.DemandStatus;
import citizen.connect.passport_service.model.Citizen;

import java.util.Date;

public class PassportServiceImpl implements PassportService {
    private final CitizenClient citizenClient;
    private final PassportRepository passportRepository;

    public PassportServiceImpl(CitizenClient citizenClient, PassportRepository passportRepository) {
        this.citizenClient = citizenClient;
        this.passportRepository = passportRepository;
    }

    @Override
    public Passport createPassport(PassportCreateDto passportCreateDto) {
        DemandStatus status = DemandStatus.PENDING;
        if (passportCreateDto.getCoupon() != null) status = DemandStatus.SUCCESS;
        Citizen citizen = citizenClient.findByCINNumber(passportCreateDto.getCINNumber());
        Passport newPassport = Passport.builder()
                .destination(passportCreateDto.getDestination())
                .destinationAddress(passportCreateDto.getDestinationAddress())
                .reason(passportCreateDto.getReason())
                .price(passportCreateDto.getPrice())
                .demandDate(new Date())
                .demandTitle("Demande de passeport")
                .demandStatus(status)
                .coupon(passportCreateDto.getCoupon())
                .CINNumber(passportCreateDto.getCINNumber())
                .citizen(citizen)
                .build();

        return passportRepository.save(newPassport);
    }

    @Override
    public Passport updateDemandStatus(DemandStatus demandStatus, Long passportId) {

        return null;
    }

    @Override
    public Passport addCouponToDemand(String coupon, Long passportId) {
        return null;
    }

    @Override
    public Passport deliverPassport(Long passportId, PassportDeliveryDto passportDeliveryDto) {
        return null;
    }

    @Override
    public Passport generateTicket(Long passportId, String CINNumber) {
        return null;
    }
}
