package com.tasklink.backend.service;

import com.tasklink.backend.model.Worker;
import com.tasklink.backend.repository.BidRepository;
import com.tasklink.backend.repository.TaskRepository;
import com.tasklink.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private com.tasklink.backend.repository.UserRepository userRepository;

    public List<Worker> findAll() {
        return workerRepository.findAll();
    }

    public Optional<Worker> findById(Long id) {
        return workerRepository.findById(id);
    }

    public Worker create(Worker worker) {
        return workerRepository.save(worker);
    }

    public Worker update(Long id, Worker worker) {
        if (workerRepository.existsById(id)) {
            worker.setId(id);
            return workerRepository.save(worker);
        }
        return null;
    }

    public void deleteById(Long id) {
        workerRepository.deleteById(id);
    }

    public Map<String, Object> getDashboardStats(Long workerId) {
        Map<String, Object> stats = new HashMap<>();

        // 1. Total Earnings
        Double earnings = taskRepository.sumEarningsByWorkerId(workerId);
        stats.put("totalEarnings", earnings != null ? earnings : 0.0);

        // 2. Jobs Completed
        long completedJobs = taskRepository.countByWorkerIdAndStatus(workerId, "COMPLETED");
        stats.put("jobsCompleted", completedJobs);

        // 3. Active Bids (Mapped to Active Jobs / In Progress Tasks)
        long activeBids = taskRepository.countByWorkerIdAndStatus(workerId, "IN_PROGRESS");
        stats.put("activeBids", activeBids);

        // 4. Rating
        Optional<Worker> workerOpt = workerRepository.findById(workerId);
        if (workerOpt.isPresent() && workerOpt.get().getAverageRating() != null) {
            stats.put("rating", workerOpt.get().getAverageRating());
        } else {
            stats.put("rating", 0.0);
        }

        // 5. Recent Jobs
        List<com.tasklink.backend.model.Task> recentJobs = taskRepository.findByWorkerId(workerId);
        recentJobs.forEach(job -> {
            if (job.getClientId() != null) {
                userRepository.findById(job.getClientId()).ifPresent(user -> {
                    job.setClientName(user.getFirstName() + " " + user.getLastName());
                });
            }
        });
        stats.put("recentJobs", recentJobs);

        return stats;
    }

    public Worker getProfile(Long id) {
        return workerRepository.findById(id).orElseGet(() -> {
            com.tasklink.backend.model.User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            return Worker.builder()
                    .id(id)
                    .user(user)
                    .professionTitle("Professional Worker")
                    .bio(user.getBio() != null ? user.getBio() : "No bio available")
                    .totalEarnings(java.math.BigDecimal.ZERO)
                    .averageRating(java.math.BigDecimal.ZERO)
                    .build();
        });
    }
}
