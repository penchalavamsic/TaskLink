package com.tasklink.backend.controller.user;

import com.tasklink.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/{userId}/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardStats(@PathVariable Long userId) {
        // Fetch stats from TaskService (total tasks, in-progress, etc.)
        Map<String, Object> stats = taskService.getDashboardStats(userId);
        return ResponseEntity.ok(stats);
    }
}
