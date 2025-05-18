package org.edev.doctorappbackend.Modules.User.Utils;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class UserUtils {
    private final UserRepository userRepository;
    public void addHistoryToUsers(List<User> users, History history) {
        for (User user : users) {
            user.getHistories().add(history);
        }
        userRepository.saveAll(users);
    }
    public User getUserById(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(UserNotFoundException::new);
    }

}
