package org.edev.doctorappbackend.Modules.Auth.Utils;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.UserExistException;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.Auth.Models.CreateModel;
import org.edev.doctorappbackend.Modules.Auth.Models.LoginModel;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.Role;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class AuthUtils {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    public void verifyIfUserExists(String email) {
        userRepository.findByEmail(email).ifPresent(user -> {
            throw new UserExistException();
        });
    }

    public void matchPassword(User user,LoginModel loginModel) {
        if (!passwordEncoder.matches(loginModel.password(), user.getPassword())){
            throw new UserNotFoundException("Senha incorreta!");
        }
    }

    public User getUser(LoginModel loginModel) {
        return userRepository.findByEmail(loginModel.email()).orElseThrow(UserNotFoundException::new);
    }
}
