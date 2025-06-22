package com.carecloud.carecloudehr.model.audit;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String userRole;
    private String action;
    private LocalDateTime timestamp;

    @Column(length = 1000)
    private String details;
}
