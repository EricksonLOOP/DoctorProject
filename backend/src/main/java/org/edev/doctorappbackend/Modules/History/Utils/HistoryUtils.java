package org.edev.doctorappbackend.Modules.History.Utils;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.UserExistException;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.History.Models.HistoryData;
import org.edev.doctorappbackend.Modules.History.Repository.HistoryRepository;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class HistoryUtils {
   private final HistoryRepository historyRepository;
    public History createHistory( Appointment appointment, List<User> users) {
        History nHistory = History
                .builder()
                .finishHour(appointment.getFinishHour())
                .initHour(appointment.getInitHour())
                .scheduledDate(appointment.getScheduledDate())
                .doctorId(appointment.getDoctorId())
                .users(users)
                .build();
        return historyRepository.save(nHistory);
    }
    public UserDto getDoctorFromHistory(History history) {
        return history.getUsers()
                .stream().filter(u -> u.getId().equals(history.getDoctorId()))
                .findFirst().orElseThrow(UserNotFoundException::new)
                .fromUserToUserDto();
    }
    public HistoryData createHistoryData(History history) {
        return new HistoryData(history.getInitHour(), history.getFinishHour(), history.getScheduledDate(), history.getId());
    }
    public UserDto getUserFromHistory(History history) {
        return history.getUsers()
                .stream().filter(u -> !u.getId().equals(history.getDoctorId()))
                .findFirst().orElseThrow(UserNotFoundException::new)
                .fromUserToUserDto();
    }

}
