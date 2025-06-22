package com.carecloud.carecloudehr.service.audit;

import com.carecloud.carecloudehr.model.audit.AuditLog;
import com.carecloud.carecloudehr.model.user.User;
import com.carecloud.carecloudehr.repository.audit.AuditLogRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuditLogService {

    private final AuditLogRepository auditLogRepository;

    public AuditLogService(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    public void logAction( String username, String userRole, String action, String details) {

        AuditLog log = new AuditLog();
        log.setUsername(username);
        log.setUserRole(userRole);
        log.setAction(action);
        log.setDetails(details);
        log.setTimestamp(LocalDateTime.now());
        auditLogRepository.save(log);
        System.out.println("Logging action: " + username + " - " + userRole + " - " + action + " - " + details);
    }

}
