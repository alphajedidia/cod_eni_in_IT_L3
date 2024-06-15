package citizen.connect.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenDetailsMap {
    private String scope;
    private String subject;
    private Long userId;
}
