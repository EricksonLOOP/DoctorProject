package org.edev.doctorappbackend.Modules.User.Models;

import java.util.List;

public record DoctorsDto(
        List<DoctorDto> doctors,
        int currentPage,
        int totalPages,
        long totalElements,
        int pageSize,
        boolean isLast
) {
}

