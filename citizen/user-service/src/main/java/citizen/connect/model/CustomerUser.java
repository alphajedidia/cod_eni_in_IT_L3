package citizen.connect.model;



import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;


public class CustomerUser extends User {
    private Long customerUserId;

    public CustomerUser(String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities, Long customerUserId) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        this.customerUserId = customerUserId;
    }

    public Long getCustomerUserId() {
        return customerUserId;
    }

    public void setCustomerUserId(Long customerUserId) {
        this.customerUserId = customerUserId;
    }
}
