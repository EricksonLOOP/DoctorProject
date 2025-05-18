package org.edev.doctorappbackend.Modules.History.Repository;

import org.edev.doctorappbackend.Modules.History.Entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface HistoryRepository extends JpaRepository<History, UUID> {
    List<History> findHistoriesByUsers_Id(UUID id);
}
