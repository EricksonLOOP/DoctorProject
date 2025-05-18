package org.edev.doctorappbackend.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AppointmentAlreadyScheduledException extends RuntimeException {
    public AppointmentAlreadyScheduledException(String message) {
        super(message);
    }
    public AppointmentAlreadyScheduledException() {
        super("Este horário já foi agendado");
    }
}
