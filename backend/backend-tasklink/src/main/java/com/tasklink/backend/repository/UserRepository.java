package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // additional query methods (if needed) go here
}