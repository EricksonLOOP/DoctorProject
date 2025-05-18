package org.edev.doctorappbackend.Modules.User.Services.Doctor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Repository.AppointmentRepository;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.DoctorDto;
import org.edev.doctorappbackend.Modules.User.Models.DoctorsDto;
import org.edev.doctorappbackend.Modules.User.Models.Role;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl implements DoctorService {
    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;
    @Override
    public DoctorsDto getDoctors(int page) {
        Pageable pageable = PageRequest.of(page, 20);
        Page<User> users = userRepository.findAllByRole(Role.DOCTOR, pageable);
        List<DoctorDto> doctorsDtoList = doctorsDtoList(users);

        return new DoctorsDto(
                doctorsDtoList,
                users.getNumber(),
                users.getTotalPages(),
                users.getTotalElements(),
                users.getSize(),
                users.isLast()
        );
    }


    @Override
    public DoctorDto getDoctor(UUID id) {
        User doctor = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        List<Appointment> appointments = appointmentRepository.findAppointmentsByDoctorId(doctor.getId());
        return new DoctorDto(doctor.fromUserToUserDto(), appointments);
    }

    private List<DoctorDto> doctorsDtoList(Page<User> users) {
        return users.getContent().stream().map(user -> {
            UserDto userDto = user.fromUserToUserDto();
            List<Appointment> appointments = appointmentRepository.findAllByDoctorId(user.getId());
            return new DoctorDto(userDto, appointments);
        }).toList();
    }
}
