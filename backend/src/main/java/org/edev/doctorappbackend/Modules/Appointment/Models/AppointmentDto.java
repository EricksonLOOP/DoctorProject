package org.edev.doctorappbackend.Modules.Appointment.Models;

import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;

public record AppointmentDto(
        Appointment appointment,
        UserDto user
) {
}
