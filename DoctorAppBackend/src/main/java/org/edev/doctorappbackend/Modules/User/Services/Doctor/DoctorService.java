package org.edev.doctorappbackend.Modules.User.Services.Doctor;

import org.edev.doctorappbackend.Modules.User.Models.DoctorDto;
import org.edev.doctorappbackend.Modules.User.Models.DoctorsDto;
import java.util.UUID;

public interface DoctorService {
    DoctorsDto getDoctors(int page);

    DoctorDto getDoctor(UUID id);
}
