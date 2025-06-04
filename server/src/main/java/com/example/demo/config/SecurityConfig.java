package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // 開發用：停用 CSRF 防護（可防止前端發送 POST 失敗）
                .authorizeHttpRequests(requests -> requests
                        .anyRequest().permitAll()); // 所有 API 都開放，不需要登入
        return http.build();
    }
}
