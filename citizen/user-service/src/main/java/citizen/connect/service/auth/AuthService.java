//package citizen.connect.service.auth;
//
//import citizen.connect.exception.RessourceNotFoundException;
//import citizen.connect.model.TokenDetailsMap;
//import org.springframework.security.oauth2.jwt.Jwt;
//
//import java.time.Instant;
//
//public interface AuthService {
//    public Jwt decodeToken(String token);
//    void generateScopeAndSubjectWithPasswordGrand( String email, String password, TokenDetailsMap tokenDetailsMap);
//    void generateScopeAndSubjectWithRefreshTokenGrand(String refreshToken,String password,String email,TokenDetailsMap tokenDetailsMap) throws RessourceNotFoundException;
//    String generateRefreshToken(String subject, Instant instant);
//    String generateToken(String scope,String subject,Instant instant,boolean withRefreshToken,Long userId);
//
//}
