package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

import java.util.Optional;

// JpaRepository<User, Long> => 操作 User 類別、主鍵為 Long
public interface UserRepository extends JpaRepository<User, Long> {
    // 這邊可以額外加自訂查詢方法（目前不需要）
    Optional<User> findByUsername(String username);
}
