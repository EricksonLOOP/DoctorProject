package org.edev.doctorappbackend.Modules.User.Models;

import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;

import java.util.List;

public record DoctorDto(
        UserDto doctor,
        List<Appointment> appointments
) {
}
