package com.carecloud.carecloudehr.service.patient;

import com.carecloud.carecloudehr.model.patient.Patient;

import java.util.List;

public interface PatientService {
    Patient createPatient(Patient patient);
    Patient getPatientById(Long id);
    List<Patient> getPatientByName(String name);
    Patient updatePatient(Long id, Patient updatedPatient);
    void deletePatient(Long id);
    List<Patient> getAllPatients();
}
