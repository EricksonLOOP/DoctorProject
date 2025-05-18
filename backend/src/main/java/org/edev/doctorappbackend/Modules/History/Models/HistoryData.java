package org.edev.doctorappbackend.Modules.History.Models;

import java.util.UUID;

public record HistoryData(
        String initHour,
        String finishHour,
        String scheduledDate,
        UUID id
) {
}
