package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "帳號已註冊";
        }
        user.setPassword(PasswordUtil.encode(user.getPassword()));
        userRepository.save(user);
        return "註冊成功";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userRepository.findByUsername(user.getUsername())
            .map(existing -> {
            if (PasswordUtil.matches(user.getPassword(), existing.getPassword())) {
                // 增加登入次數
                existing.setLoginCount(existing.getLoginCount() + 1);
                userRepository.save(existing); // 更新資料庫
                return "登入成功，您已登入 " + existing.getLoginCount() + " 次";
            } else {
                return "密碼錯誤";
            }
        })
        .orElse("帳號不存在");
    }
}

