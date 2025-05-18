package org.edev.doctorappbackend.Modules.User.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.edev.doctorappbackend.Modules.User.Models.Role;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;
import org.edev.doctorappbackend.Modules.User.Models.UserDtoWithAppointmentDto;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Appointment> appointments = new ArrayList<>();

    @ManyToMany(mappedBy = "users")
    private List<History> histories;

    public UserDto fromUserToUserDto() {
        return new UserDto(this.id, this.name, this.email, this.appointments);
    }

    public UserDtoWithAppointmentDto fromUserToUserDtoWithAppointmentDtoList(UserRepository userRepository) {
        return new UserDtoWithAppointmentDto(
                this.id,
                this.name,
                this.email,
                getAppointmentDtoFromUserToAppointmentDto(userRepository)
        );
    }

    public List<AppointmentDto> getAppointmentDtoFromUserToAppointmentDto(UserRepository userRepository) {
        return this.appointments.stream()
                .map(appointment -> appointment.getAppointmentWithDoctorDto(userRepository))
                .toList();
    }
}


