package org.edev.doctorappbackend.Modules.Appointment.Models;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;

public record CreateAppointmentDto(
        @NotBlank(message = "Coloque uma hora de inicio válida")
        String initHour,
        @NotBlank(message = "Coloque uma hora fim válida")
        String finishHour,
        @NotBlank(message = "Coloque uma data válida")
        String schuduledDate
) {
}
