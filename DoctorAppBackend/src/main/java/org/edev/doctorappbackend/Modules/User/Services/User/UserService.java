package org.edev.doctorappbackend.Modules.User.Services.User;
import org.edev.doctorappbackend.Modules.User.Models.UserDtoWithAppointmentDto;

import java.util.UUID;

public interface UserService {
    UserDtoWithAppointmentDto getUserData(UUID userId);
}
