package org.edev.doctorappbackend.Modules.Appointment.Service;

import org.edev.doctorappbackend.Modules.Appointment.Entity.Appointment;
import org.edev.doctorappbackend.Modules.Appointment.Models.AppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.CreateAppointmentDto;
import org.edev.doctorappbackend.Modules.Appointment.Models.UpdateAppointmentDto;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface AppointmentService {
    Appointment createAppointment(CreateAppointmentDto createAppointmentDto, UUID doctorId);
    void deleteAppointment(UUID appointmentId, UUID doctorId);
    Appointment updateAppointment(UpdateAppointmentDto updateAppointmentDto, UUID appointmentId, UUID doctorId);
    Appointment getAppointment(UUID appointmentId);
    List<AppointmentDto> getAllAppointments(UUID doctorId);
    Appointment toScheduleAppointment(UUID appointmentId, UUID userId);
    Appointment toUnscheduleAppointment(UUID appointmentId, UUID doctorId);
}
