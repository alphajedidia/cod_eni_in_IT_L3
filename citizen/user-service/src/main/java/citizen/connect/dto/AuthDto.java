package citizen.connect.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthDto {
    String CINNumber;
    String password;
    boolean withRefreshToken;
    String grandType;
    String refreshToken;
}
