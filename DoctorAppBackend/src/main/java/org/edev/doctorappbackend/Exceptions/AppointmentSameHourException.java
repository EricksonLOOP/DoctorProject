package org.edev.doctorappbackend.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class AppointmentSameHourException extends RuntimeException {
    public AppointmentSameHourException(String message) {
        super(message);
    }
    public AppointmentSameHourException() {
        super("Jã existe este horário na agenda");
    }
}
