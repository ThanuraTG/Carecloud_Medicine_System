package com.carecloud.carecloudehr.config.usermanagement;

import com.carecloud.carecloudehr.filter.JwtAuthenticationFilter;
import com.carecloud.carecloudehr.service.user.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomUserDetailsService customUserDetailsService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter; // Add JWT filter

    public SecurityConfig(CustomUserDetailsService customUserDetailsService, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.customUserDetailsService = customUserDetailsService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter; //Initialize the filter
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow OPTIONS requests
                        .requestMatchers("/api/login").permitAll() // Allow access to login endpoint

                        // Role-based access to /api/users
                        .requestMatchers(HttpMethod.GET, "/api/users").hasRole("ADMIN") // Allow only ADMIN to list all users
                        .requestMatchers(HttpMethod.POST, "/api/users").hasRole("ADMIN") // Allow only ADMIN to create users
                        .requestMatchers(HttpMethod.PUT, "/api/users/**").hasRole("ADMIN") // Restrict updates to ADMIN only
                        .requestMatchers(HttpMethod.DELETE, "/api/users/**").hasRole("ADMIN") // Restrict deletes to ADMIN only

                        // Other role-specific routes
                        // Restrict patient management to Staff
                        .requestMatchers("/api/patients/**").hasRole("STAFF")
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .requestMatchers("/api/staff/**").hasRole("STAFF")
                        .requestMatchers("/api/doctor/**").hasRole("DOCTOR")
                                       
                        .requestMatchers("/api/v1/bill/**").permitAll()
                        .requestMatchers("/api/v1/billdetail/**").permitAll()

                        .anyRequest().authenticated()
                )
                .httpBasic(withDefaults())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter before the UsernamePasswordAuthenticationFilter
        return http.build();
    }


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
