package com.carecloud.carecloudehr.controller;


import com.carecloud.carecloudehr.dto.PatientResponseDTO;
import com.carecloud.carecloudehr.model.patient.Patient;
import com.carecloud.carecloudehr.repository.patient.PatientRepository;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.patient.PatientService;
import com.carecloud.carecloudehr.service.user.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private AuditLogService auditLogService;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        // Save the patient
        Patient createdPatient = patientService.createPatient(patient);

        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "CREATE_PATIENT",
                "Created patient with ID: " + createdPatient.getId()
        );

        return ResponseEntity.ok(createdPatient);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientResponseDTO> getPatientById(@PathVariable Long id) {
        Patient patient = patientService.getPatientById(id);

        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "VIEW_PATIENT",
                "Viewed patient details for ID: " + id
        );

        PatientResponseDTO response = new PatientResponseDTO();
        response.setName(patient.getName());
        response.setAge(patient.getAge());
        response.setContactNumber(patient.getContactNumber());
        response.setAddress(patient.getAddress());
        response.setAge(patient.getAge());
        response.setMedicalHistory(patient.getMedicalHistory());
        response.setRequiresGuardian(patient.getRequiresGuardian());

        if (patient.getRequiresGuardian()) {
            PatientResponseDTO.GuardianDetailsDTO guardianDTO = new PatientResponseDTO.GuardianDetailsDTO();
            guardianDTO.setName(patient.getGuardianDetails().getName());
            guardianDTO.setAddress(patient.getGuardianDetails().getAddress());
            guardianDTO.setContactNumber(patient.getGuardianDetails().getContactNumber());
            guardianDTO.setRelationship(patient.getGuardianDetails().getRelationship());
            response.setGuardianDetails(guardianDTO);
        }
        return ResponseEntity.ok(response);
    }

    //@GetMapping("/name/{name}")
    //public ResponseEntity<List<Patient>> getPatientByName(@PathVariable String name) {

        // Audit log
        //auditLogService.logAction(
                //getCurrentUsername(),
                //getCurrentUserRole(),
                //"SEARCH_PATIENT_BY_NAME",
                //"Searched for patients with name: " + name
        //);
        //return ResponseEntity.ok(patientService.getPatientByName(name));
    //}
        @GetMapping("/name/{name}")
        public ResponseEntity<List<Patient>> getPatientByName(@PathVariable String name) {
            auditLogService.logAction(
                    getCurrentUsername(),
                    getCurrentUserRole(),
                    "SEARCH_PATIENT_BY_NAME",
                    "Searched for patients with name: " + name
            );

            List<Patient> patients = patientService.getPatientByName(name);

            if (patients.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
            }

            return ResponseEntity.ok(patients);
        }




    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {

        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "UPDATE_PATIENT",
                "Updated patient with ID: " + id
        );

        return ResponseEntity.ok(patientService.updatePatient(id, updatedPatient));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "DELETE_PATIENT",
                "Deleted patient with ID: " + id
        );
        return ResponseEntity.ok("Patient deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {

        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "VIEW_ALL_PATIENTS",
                "Viewed all patients"
        );
        return ResponseEntity.ok(patientService.getAllPatients());
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
