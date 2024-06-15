package citizen.connect.web;

import citizen.connect.dto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private JwtEncoder jwtEncoder;

    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/profile")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }

    @PostMapping ("/login")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, String> login(LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getCINNumber(), loginDto.getPassword()));
        Instant instant = Instant.now();
        String scope = authentication.getAuthorities().stream().map(auth->auth.getAuthority()).collect(Collectors.joining(" "));
        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
                .issuedAt(instant)
                .expiresAt(instant.plus(1, ChronoUnit.HOURS))
                .subject(loginDto.getCINNumber())
                .claim("scope", scope)
                .build();
        JwtEncoderParameters jwtEncoderParameters =
                JwtEncoderParameters.from(
                        JwsHeader.with(MacAlgorithm.HS512).build(),
                        jwtClaimsSet
                );
        String jwt = jwtEncoder.encode(jwtEncoderParameters).getTokenValue();
        return Map.of("access-token", jwt);
    }
}