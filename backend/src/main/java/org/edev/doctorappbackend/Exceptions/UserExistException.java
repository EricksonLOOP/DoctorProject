package org.edev.doctorappbackend.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserExistException extends RuntimeException {
    public UserExistException(String message) {
        super(message);
    }
    public UserExistException() {
        super();
    }
}
