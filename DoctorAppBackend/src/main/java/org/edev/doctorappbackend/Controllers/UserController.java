package org.edev.doctorappbackend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.Auth.Utils.JwtUtil;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;
import org.edev.doctorappbackend.Modules.User.Models.UserDtoWithAppointmentDto;
import org.edev.doctorappbackend.Modules.User.Services.User.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final JwtUtil jwtUtil;
    private final UserService userService;
    @GetMapping("/data")
    public ResponseEntity<UserDtoWithAppointmentDto> getUser(HttpServletRequest request) {
        UUID uuid = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserData(uuid));
    }

}
