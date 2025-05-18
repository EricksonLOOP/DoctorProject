package org.edev.doctorappbackend.Modules.History.Models;

import org.edev.doctorappbackend.Modules.User.Models.UserDto;

public record HistoryDto(
        HistoryData history,
        UserDto patient,
        UserDto doctor
) {
}
