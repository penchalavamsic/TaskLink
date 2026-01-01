package com.tasklink.backend.service;

import com.tasklink.backend.model.Task;
import com.tasklink.backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @org.springframework.transaction.annotation.Transactional
    public Task createTask(Task task) {
        String catName = task.getCategoryInput();
        if (catName != null) {
            Integer catId = taskRepository.findCategoryIdByName(catName);
            if (catId == null) {
                taskRepository.createCategory(catName);
                catId = taskRepository.findCategoryIdByName(catName);
            }
            task.setCategoryId(catId);
        }
        return taskRepository.save(task);
    }

    public List<Task> getTasksByClientId(Long clientId) {
        return taskRepository.findByClientId(clientId);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
