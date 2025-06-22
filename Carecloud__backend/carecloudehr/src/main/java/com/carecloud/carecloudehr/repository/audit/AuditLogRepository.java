package com.carecloud.carecloudehr.repository.audit;

import com.carecloud.carecloudehr.model.audit.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
}
