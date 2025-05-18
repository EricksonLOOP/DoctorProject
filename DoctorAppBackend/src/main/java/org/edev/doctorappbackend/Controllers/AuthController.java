package org.edev.doctorappbackend.Controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.Auth.Models.CreateModel;
import org.edev.doctorappbackend.Modules.Auth.Models.LoginModel;
import org.edev.doctorappbackend.Modules.Auth.Models.SuccessLoginDto;
import org.edev.doctorappbackend.Modules.Auth.Service.AuthService;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody @Valid CreateModel createModel) {
        authService.signup(createModel);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @PostMapping("/login")
    public ResponseEntity<SuccessLoginDto> login(@RequestBody @Valid LoginModel loginModel) {
      return ResponseEntity.status(HttpStatus.OK).body(authService.login(loginModel));
    }
}
