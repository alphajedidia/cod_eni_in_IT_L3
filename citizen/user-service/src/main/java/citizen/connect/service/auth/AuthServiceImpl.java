//package citizen.connect.service.auth;
//
//import citizen.connect.exception.RessourceNotFoundException;
//import citizen.connect.model.CustomerUser;
//import citizen.connect.model.TokenDetailsMap;
//import citizen.connect.service.CitizenService;
//import citizen.connect.service.UserDetailServiceImpl;
//import lombok.AllArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.jwt.*;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.Instant;
//import java.time.temporal.ChronoUnit;
//import java.util.Collection;
//import java.util.stream.Collectors;
//
//@Service
//@Transactional
//@AllArgsConstructor
//public class AuthServiceImpl implements AuthService {
//
//
//    JwtEncoder jwtEncoder;
//    JwtDecoder jwtDecoder;
//    AuthenticationManager authenticationManager;
//    UserDetailServiceImpl userDetailsServiceImp;
//    CitizenService citizenService;
//    @Override
//    public void generateScopeAndSubjectWithPasswordGrand(String email, String password, TokenDetailsMap tokenDetailsMap) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(email, password)
//        );
//        tokenDetailsMap.setSubject(authentication.getName());
//        tokenDetailsMap.setScope((authentication.getAuthorities().stream().map(aut->aut.getAuthority()).collect(Collectors.joining(" "))));
//        tokenDetailsMap.setUserId(citizenService.findCitizenByCINNumber(authentication.getName()).getCitizenId());
//    }
//
//    @Override
//    public void generateScopeAndSubjectWithRefreshTokenGrand(String refreshToken,String password,String email,TokenDetailsMap tokenDetailsMap) throws RessourceNotFoundException {
//        Jwt decodeJwt = null;
//        try {
//            decodeJwt = jwtDecoder.decode(refreshToken);
//        } catch (JwtException e) {
//            throw  new RessourceNotFoundException("Token is required!");
//        }
//        tokenDetailsMap.setSubject(decodeJwt.getSubject());
//        CustomerUser userDetails = userDetailsServiceImp.loadUserByUsername(tokenDetailsMap.getSubject());
//        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
//        tokenDetailsMap.setUserId(userDetails.getCustomerUserId());
//        tokenDetailsMap.setScope(authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" ")));
//    }
//
//    @Override
//    public String generateRefreshToken(String subject, Instant instant) {
//        JwtClaimsSet jwtClaimsSetRefresh =  JwtClaimsSet.builder()
//                .subject(subject)
//                .issuedAt(instant)
//                .expiresAt(instant.plus(15, ChronoUnit.MINUTES))
//                .issuer("user-service")
//                .build();
//        return jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSetRefresh)).getTokenValue();
//    }
//
//    @Override
//    public String generateToken(String scope, String subject, Instant instant,boolean withRefreshToken,Long userId) {
//        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
//                .subject(subject)
//                .issuedAt(instant)
//                .id(String.valueOf(userId))
//                .expiresAt(instant.plus(withRefreshToken ? 10 : 15, ChronoUnit.MINUTES))
//                .issuer("user-service")
//                .claim("scope",scope)
//                .build();
//        return jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSet)).getTokenValue();
//    }
//    @Override
//    public Jwt decodeToken(String token){
//        return jwtDecoder.decode(token);
//    }
//}
