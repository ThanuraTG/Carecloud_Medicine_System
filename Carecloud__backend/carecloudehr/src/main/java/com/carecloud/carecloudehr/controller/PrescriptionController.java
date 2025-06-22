package com.carecloud.carecloudehr.controller;

import com.carecloud.carecloudehr.model.prescription.Prescription;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.prescription.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @Autowired
    private AuditLogService auditLogService;

    @PostMapping("/patient/{patientId}")
    public ResponseEntity<Prescription> addPrescription (@PathVariable Long patientId, @RequestBody Prescription prescription) {
        Prescription savedPrescription = prescriptionService.addPrescription(patientId, prescription);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "CREATE_PRESCRIPTION_BY_PATIENT_ID: " + patientId,
                "Create prescription by patient"
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPrescription);
    }

    @PutMapping("/{prescriptionId}")
    public ResponseEntity<Prescription> updatePrescription(@PathVariable Long prescriptionId, @RequestBody Prescription prescription) {
        Prescription updatedPrescription = prescriptionService.updatePrescription(prescriptionId, prescription);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "UPDATE_PRESCRIPTION_BY_ID: " + prescriptionId,
                "Updated prescription by its id"
        );
        return ResponseEntity.ok(updatedPrescription);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Prescription>> getPrescriptionsByPatientId(@PathVariable Long patientId) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByPatientId(patientId);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "VIEW_PRESCRIPTION_BY_PATIENT_ID: " + patientId,
                "Viewed prescription by patient"
        );
        return ResponseEntity.ok(prescriptions);
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
