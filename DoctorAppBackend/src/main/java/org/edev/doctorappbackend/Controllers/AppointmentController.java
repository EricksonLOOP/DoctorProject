package org.edev.doctorappbackend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.CreateAppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.UpdateAppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Service.AppointmentService;
import org.edev.doctorappbackend.Modules.Auth.Utils.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/appointment/")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final JwtUtil jwtUtil;
    @PostMapping("/create")
    public ResponseEntity<Appointment> createAppointment(
            @RequestBody
            @Valid
            CreateAppointmentDto createAppointmentDto,
            HttpServletRequest request) {
        UUID doctorId = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(appointmentService.createAppointment(createAppointmentDto, doctorId));
    }
    @DeleteMapping("/delete/{appointmentId}")
    public ResponseEntity<Void> deleteAppointment(
            @PathVariable UUID appointmentId,
            HttpServletRequest request) {
        UUID doctorId = UUID.fromString(jwtUtil.getUserId(request));
        appointmentService.deleteAppointment(appointmentId, doctorId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @PutMapping("/update/{appointmentId}")
    public ResponseEntity<Appointment> updateAppointment(
            @PathVariable UUID appointmentId,
            @RequestBody UpdateAppointmentDto updateAppointmentDto,
            HttpServletRequest request) {
        UUID doctorId = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(appointmentService.updateAppointment(updateAppointmentDto, appointmentId, doctorId));
    }
    @PutMapping("/schedule/{appointmentId}")
    public ResponseEntity<Appointment> scheduleAppointment(
            @PathVariable UUID appointmentId,
            HttpServletRequest request) {
        UUID userId = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity.status(HttpStatus.OK)
                .body(appointmentService.toScheduleAppointment(appointmentId, userId));
    }
    @PutMapping("/unschedule/{appointmentId}")
    public ResponseEntity<Appointment> unscheduleAppointment(
            @PathVariable UUID appointmentId,
            HttpServletRequest request) {
        UUID doctorId = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity.status(HttpStatus.OK)
                .body(appointmentService.toUnscheduleAppointment(appointmentId, doctorId));
    }

    @GetMapping("/doctor/{doctorId}/appointments")
    public ResponseEntity<List<AppointmentDto>> getAppointments(@PathVariable UUID doctorId) {
        return ResponseEntity.status(HttpStatus.OK).body(appointmentService.getAllAppointments(doctorId));
    }

}
