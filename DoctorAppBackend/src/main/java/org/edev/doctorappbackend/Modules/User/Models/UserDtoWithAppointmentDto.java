package org.edev.doctorappbackend.Modules.User.Models;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;

import java.util.List;
import java.util.UUID;

public record UserDtoWithAppointmentDto(
        UUID id,
        String name,
        String email,
        List<AppointmentDto> appointments
) {
}
