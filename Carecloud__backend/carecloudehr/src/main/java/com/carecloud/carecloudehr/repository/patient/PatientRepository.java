package com.carecloud.carecloudehr.repository.patient;

import com.carecloud.carecloudehr.model.patient.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository <Patient, Long> {
    List<Patient> findByName(String name);
}
