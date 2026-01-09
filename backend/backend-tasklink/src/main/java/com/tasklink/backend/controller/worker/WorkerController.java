package com.tasklink.backend.controller.worker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tasklink.backend.service.WorkerService;

@RestController
@RequestMapping("/api/worker")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @GetMapping("/{id}/dashboard-stats")
    public ResponseEntity<?> getDashboardStats(@PathVariable Long id) {
        return ResponseEntity.ok(workerService.getDashboardStats(id));
    }
}
