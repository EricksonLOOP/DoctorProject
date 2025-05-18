package org.edev.doctorappbackend.Modules.Appointment.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.jsonwebtoken.lang.Collections;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.edev.doctorappbackend.Exceptions.UserNotFoundException;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.UserDto;
import org.edev.doctorappbackend.Modules.User.Repository.UserRepository;

import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@Builder
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String initHour;
    private String finishHour;
    private boolean available;
    private UUID doctorId;
    private String scheduledDate;

    @ManyToOne(optional = true)
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    @JsonIgnore
    private User user;
    public UserDto getUserDto() {
        return (this.user != null
                ? new UserDto(
                        this.user.getId(),
                        this.user.getName(),
                        this.user.getEmail(),
                        Collections.emptyList())
                : null);
    }
    public AppointmentDto getAppointmentWithDoctorDto(UserRepository doctorRepository){
        User doctor = doctorRepository.findById(this.doctorId)
                .orElseThrow(UserNotFoundException::new);
        return new AppointmentDto(getAppointmentWithoutUser(), doctor.fromUserToUserDto());
    }
    @JsonIgnore
    public Appointment getAppointmentWithoutUser(){
        return new Appointment(
                this.id,
                this.initHour,
                this.finishHour,
                this.available,
                this.doctorId,
                this.scheduledDate,
                null);
    }
    public Appointment() {}
}
