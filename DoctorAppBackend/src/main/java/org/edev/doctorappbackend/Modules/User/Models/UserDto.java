package org.edev.doctorappbackend.Modules.User.Models;

import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;

import java.util.List;
import java.util.UUID;

public record UserDto(
        UUID id,
        String name,
        String email,
        List<Appointment> appointments
) {
}
