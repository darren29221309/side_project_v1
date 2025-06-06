package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 自動遞增
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;

    @Column(name = "login_count")
    private int loginCount = 0; // 初始為 0

    // 建構子
    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter & Setter（必要）
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public int getLoginCount() {
        return loginCount;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setLoginCount(int loginCount) {
        this.loginCount = loginCount;
    }
}