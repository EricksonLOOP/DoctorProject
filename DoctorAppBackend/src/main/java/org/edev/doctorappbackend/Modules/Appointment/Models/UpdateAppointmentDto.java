package org.edev.doctorappbackend.Modules.Appointment.Models;

public record UpdateAppointmentDto(
        String initHour,
        String finishHour,
        String scheduledDate,
        boolean isAvailable

) {
}
