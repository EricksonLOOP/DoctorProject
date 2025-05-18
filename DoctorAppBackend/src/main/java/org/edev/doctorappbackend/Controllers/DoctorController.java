package org.edev.doctorappbackend.Controllers;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.User.Models.DoctorDto;
import org.edev.doctorappbackend.Modules.User.Models.DoctorsDto;
import org.edev.doctorappbackend.Modules.User.Services.Doctor.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/doctors")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping()
    public ResponseEntity<DoctorsDto> getAllDoctors(@RequestParam(defaultValue = "0") int page) {
        return ResponseEntity.status(HttpStatus.OK).body(doctorService.getDoctors(page));
    }
    @GetMapping("/doctor/{id}")
    public ResponseEntity<DoctorDto> getDoctorById(@PathVariable UUID id) {
        return ResponseEntity.status(HttpStatus.OK).body(doctorService.getDoctor(id));
    }
}
