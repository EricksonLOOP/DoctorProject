package org.edev.doctorappbackend.Modules.Auth.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.edev.doctorappbackend.Modules.Auth.Models.CreateModel;
import org.edev.doctorappbackend.Modules.Auth.Models.LoginModel;
import org.edev.doctorappbackend.Modules.Auth.Models.SuccessLoginDto;
import org.edev.doctorappbackend.Modules.Auth.Models.Type;
import org.edev.doctorappbackend.Modules.Auth.Utils.AuthUtils;
import org.edev.doctorappbackend.Modules.Auth.Utils.JwtUtil;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.Role;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Log4j2
public class AuthServiceImpl implements AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthUtils utils;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    @Override
    public SuccessLoginDto login(LoginModel loginModel) {
        User user = utils.getUser(loginModel);
        utils.matchPassword(user,loginModel);
        Authentication authentication =
                authenticationManager.
                        authenticate(
                                new UsernamePasswordAuthenticationToken(
                                        loginModel.email(), loginModel.password()
                                ));
        String url = user.getRole() == Role.DOCTOR ? "/dashboard/doctor" : "/dashboard/patient";
        return new SuccessLoginDto(jwtUtil.createToken(user), url);

    }
    @Override
    public void signup(CreateModel createModel) {
        //Lança uma exceção caso o usuário je exista
        utils.verifyIfUserExists(createModel.email());
        //Executado caso não exista
        User user = User.builder()
                .email(createModel.email())
                .name(createModel.name())
                .password(passwordEncoder.encode(createModel.password()))
                .role(createModel.type())
                .build();
        userRepository.save(user);

    }

}
