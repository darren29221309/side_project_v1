package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // 允許前端跨域請求，否則 React 無法連接
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // GET 請求 => 查所有使用者
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}