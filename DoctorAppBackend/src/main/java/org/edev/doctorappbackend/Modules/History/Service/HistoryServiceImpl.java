package org.edev.doctorappbackend.Modules.History.Service;

import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.History.Models.HistoryDto;
import org.edev.doctorappbackend.Modules.History.Repository.HistoryRepository;
import org.edev.doctorappbackend.Modules.History.Utils.HistoryUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class HistoryServiceImpl implements HistoryService {
    private final HistoryUtils historyUtils;
    private final HistoryRepository historyRepository;
    @Override
    public List<HistoryDto> getUserHistory(UUID userId) {

        return historyRepository
                .findHistoriesByUsers_Id(userId)
                .stream()
                .map(history -> new HistoryDto(
                        historyUtils.createHistoryData(history),
                        historyUtils.getUserFromHistory(history),
                        historyUtils.getDoctorFromHistory(history)))
                .toList();
    }
}
