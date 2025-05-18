package org.edev.doctorappbackend.Modules.History.Service;

import org.edev.doctorappbackend.Modules.History.Models.HistoryDto;

import java.util.List;
import java.util.UUID;

public interface HistoryService {
    List<HistoryDto> getUserHistory(UUID userId);
}
