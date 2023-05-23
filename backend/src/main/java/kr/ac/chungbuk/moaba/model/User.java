package kr.ac.chungbuk.moaba.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Table(name= "users")
@Data
@Entity
public class User implements UserDetails {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id private Long id;

    @Column(unique=true)
    @NonNull private String username;
    @NonNull private String password;
    @NonNull private String role;
    @NonNull private String email;

    @NonNull private boolean isLocked;
    @NonNull private boolean isBanned;
    @NonNull private boolean isDeleted;
    private OffsetDateTime createdAt;
    private OffsetDateTime deletedAt;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attempt_id")
    private Attempt attempt;

    protected User() { }

    public User(String username, String password, String email, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;

        isLocked = false;
        isBanned = false;
        isDeleted = false;
        createdAt = deletedAt = OffsetDateTime.now();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(this.role));

        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return (!isLocked && !isBanned && !isDeleted);
    }

    @Override
    public boolean isAccountNonLocked() {
        return !isLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return (!isLocked && !isBanned && !isDeleted);
    }
}
