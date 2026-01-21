package com.tasklink.backend.controller;

import com.tasklink.backend.model.Role;
import com.tasklink.backend.repository.TaskRepository;
import com.tasklink.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/dashboard-stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        long totalUsers = userRepository.countByRole(Role.CLIENT);
        long totalWorkers = userRepository.countByRole(Role.WORKER);
        long activeTasks = taskRepository.countByStatus("IN_PROGRESS");
        // Or include OPEN tasks as well if needed, but usually 'active' means in
        // progress.
        // Let's stick to IN_PROGRESS for 'Active Tasks' statistic, or maybe OPEN +
        // IN_PROGRESS.
        // For now, let's just count IN_PROGRESS as active.

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsers", totalUsers);
        stats.put("totalWorkers", totalWorkers);
        stats.put("activeTasks", activeTasks);

        return ResponseEntity.ok(stats);
    }
}
