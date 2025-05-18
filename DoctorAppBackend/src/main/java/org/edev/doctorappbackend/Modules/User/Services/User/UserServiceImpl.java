package org.edev.doctorappbackend.Modules.User.Services.User;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.UserDtoWithAppointmentDto;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public UserDtoWithAppointmentDto getUserData(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);
        UserDtoWithAppointmentDto dtoWithAppointmentDto = user.fromUserToUserDtoWithAppointmentDtoList(userRepository);

        return dtoWithAppointmentDto;
    }
}
