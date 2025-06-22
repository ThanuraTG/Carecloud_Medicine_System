package com.carecloud.carecloudehr.controller;

import com.carecloud.carecloudehr.model.medicalrecord.MedicalRecord;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.medicalrecord.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-records")
public class MedicalRecordController {

    @Autowired
    private MedicalRecordService medicalRecordService;

    @Autowired
    private AuditLogService auditLogService;

    @PostMapping("/patient/{patientId}")
    public ResponseEntity<MedicalRecord> saveMedicalRecord(
            @PathVariable Long patientId,
            @RequestBody MedicalRecord medicalRecord) {
        MedicalRecord savedRecord = medicalRecordService.saveMedicalRecord(patientId, medicalRecord);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "CREATE_MEDICAL_RECORD",
                "Created medical record"
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRecord);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<MedicalRecord>> getMedicalRecordsByPatient(@PathVariable Long patientId) {
        List<MedicalRecord> records = medicalRecordService.getMedicalRecordsByPatient(patientId);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "VIEW_MEDICAL_RECORD_BY_PATIENT: " + patientId,
                "Viewed medical record"
        );
        return ResponseEntity.ok(records);
    }

    @PutMapping("/{recordId}")
    public ResponseEntity<MedicalRecord> updateMedicalRecord(
            @PathVariable Long recordId,
            @RequestBody MedicalRecord medicalRecord) {
        MedicalRecord updatedRecord = medicalRecordService.updateMedicalRecord(recordId, medicalRecord);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "UPDATE_MEDICAL_RECORD: " + recordId,
                "Updated medical record"
        );
        return ResponseEntity.ok(updatedRecord);
    }

    @DeleteMapping("/{recordId}")
    public ResponseEntity<Void> deleteMedicalRecord(@PathVariable Long recordId) {
        medicalRecordService.deleteMedicalRecord(recordId);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "DELETE_MEDICAL_RECORD: " + recordId,
                "Deleted medical record"
        );
        return ResponseEntity.noContent().build();
    }

    // Helper methods to get the current user's username and role
    private String getCurrentUsername() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof org.springframework.security.core.userdetails.User) {
            return ((org.springframework.security.core.userdetails.User) principal).getUsername();
        } else if (principal instanceof String) {
            return (String) principal; // In some cases, the principal might still be a String
        } else {
            throw new IllegalStateException("Unexpected principal type: " + principal.getClass());
        }
    }


    private String getCurrentUserRole() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst()
                .orElse("UNKNOWN_ROLE");
    }
}
