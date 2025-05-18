package org.edev.doctorappbackend.Modules.Appointment.Repository;

import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AppointmentRepository extends JpaRepository<Appointment, UUID> {
    Optional<Appointment> findAppointmentsByInitHourAndDoctorId(String hour, UUID doctorId);
    Optional<Appointment> findAppointmentByIdAndDoctorId(UUID id, UUID doctorId);
    List<Appointment> findAppointmentsByDoctorId(UUID doctorId);

    List<Appointment> findAllByDoctorId(UUID doctorId);
}
