package citizen.connect.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class RessourceNotFoundException extends Exception {
    public RessourceNotFoundException(String message) {
        super(message);
    }
}
