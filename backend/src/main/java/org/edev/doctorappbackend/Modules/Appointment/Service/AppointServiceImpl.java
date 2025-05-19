package org.edev.doctorappbackend.Modules.Appointment.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.AppointmentAlreadyScheduledException;
import org.edev.doctorappbackend.Exceptions.AppointmentSameHourException;
import org.edev.doctorappbackend.Exceptions.ResourceNotFoundException;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.CreateAppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.UpdateAppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Repository.AppointmentRepository;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.History.Repository.HistoryRepository;
import org.edev.doctorappbackend.Modules.History.Utils.HistoryUtils;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.edev.doctorappbackend.Modules.User.Utils.UserUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppointServiceImpl implements AppointmentService{
    private final AppointmentRepository appointmentRepository;
    private final UserUtils userUtils;
    private final UserRepository userRepository;
    private final HistoryUtils historyUtils;
    @Override
    public Appointment createAppointment(CreateAppointmentDto createAppointmentDto, UUID doctorId) {
        appointmentRepository.findAppointmentsByInitHourAndDoctorId(createAppointmentDto.initHour(), doctorId)
                .ifPresent(ap -> {
                    throw new AppointmentSameHourException();
                });
       Appointment appointment = Appointment.builder()
               .initHour(createAppointmentDto.initHour())
               .finishHour(createAppointmentDto.finishHour())
               .scheduledDate(createAppointmentDto.schuduledDate())
               .doctorId(doctorId)
               .available(true)
               .user(null)
               .build();
       return appointmentRepository.save(appointment);
    }

    @Override
    public void deleteAppointment(UUID appointmentId, UUID doctorId) {
        Appointment appointment = appointmentRepository
                .findAppointmentByIdAndDoctorId(appointmentId, doctorId)
                .orElseThrow(()-> new ResourceNotFoundException("Agendamento não encontrado"));
        appointmentRepository.delete(appointment);
    }

    @Override
    public Appointment updateAppointment(UpdateAppointmentDto updateAppointmentDto, UUID appointmentId, UUID doctorId) {
        Appointment appointment = appointmentRepository.findAppointmentByIdAndDoctorId(appointmentId, doctorId)
                .orElseThrow(()-> new ResourceNotFoundException("Agendamento não encontrado"));
        appointment.setInitHour(updateAppointmentDto.initHour());
        appointment.setFinishHour(updateAppointmentDto.finishHour());
        appointment.setScheduledDate(updateAppointmentDto.scheduledDate());
        return appointmentRepository.save(appointment);
    }

    @Override
    public Appointment getAppointment(UUID appointmentId) {
        return appointmentRepository.findById(appointmentId).orElseThrow(()-> new ResourceNotFoundException("Agendamento não encontrado"));
    }

    @Override
    public List<AppointmentDto> getAllAppointments(UUID doctorId) {


        return  appointmentRepository
                .findAppointmentsByDoctorId(doctorId)
                .stream()
                .map( app -> {
                    return new AppointmentDto(app, app.getUserDto());
                }).toList();
    }

    @Override
    @Transactional
    public Appointment toScheduleAppointment(UUID appointmentId, UUID userId) {
        Appointment appointment = getAppointment(appointmentId);
        if (!appointment.isAvailable() || appointment.getUser() != null) {
            throw new AppointmentAlreadyScheduledException();
        }
        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);
        User doctor = userRepository.findById(appointment.getDoctorId())
                .orElseThrow(UserNotFoundException::new);
        History history = historyUtils.createHistory(appointment, List.of(doctor, user));
         userUtils.addHistoryToUsers(List.of(user, doctor), history);
        appointment.setUser(user);
        appointment.setAvailable(false);
        return appointmentRepository.save(appointment);
    }
    @Override
    public Appointment toUnscheduleAppointment(UUID appointmentId, UUID doctorId) {
        Appointment appointment = appointmentRepository
                .findAppointmentByIdAndDoctorId(appointmentId, doctorId)
                .orElseThrow(()-> new ResourceNotFoundException("Agendamento não encontrado"));
        appointment.setAvailable(true);
        appointment.setUser(null);
        return appointmentRepository.save(appointment);
    }
}
