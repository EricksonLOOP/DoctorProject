package org.edev.doctorappbackend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.edev.doctorappbackend.Modules.Auth.Utils.JwtUtil;
import org.edev.doctorappbackend.Modules.History.Models.HistoryDto;
import org.edev.doctorappbackend.Modules.History.Service.HistoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/history")
public class HistoryController {
    private final JwtUtil jwtUtil;
    private final HistoryService historyService;
    @GetMapping
    public ResponseEntity<List<HistoryDto>> getUserHistory(HttpServletRequest request) {
        UUID userId = UUID.fromString(jwtUtil.getUserId(request));
        return ResponseEntity.status(HttpStatus.OK).body(historyService.getUserHistory(userId));
    }
}
