package com.carecloud.carecloudehr.service.patient;

import com.carecloud.carecloudehr.model.patient.Patient;
import com.carecloud.carecloudehr.repository.patient.PatientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient createPatient(Patient patient) {
        if (patient.getAge() != null && patient.getAge() < 18) {
            if (patient.getGuardianDetails() == null ||
                patient.getGuardianDetails().getName() == null ||
                patient.getGuardianDetails().getAddress() == null ||
                patient.getGuardianDetails().getContactNumber() == null ||
                patient.getGuardianDetails().getRelationship() == null) {
                throw new RuntimeException("Guardian details are required for patients below 18 years old.");
            }
            patient.setRequiresGuardian(true);
        }else {
            patient.setRequiresGuardian(false);
        }
        return patientRepository.save(patient);
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
    }

    @Override
    public List<Patient> getPatientByName(String name) {
        return patientRepository.findByName(name);
    }

    @Override
    @Transactional
    public Patient updatePatient(Long id, Patient updatedPatient) {
        if (updatedPatient == null) {
            throw new IllegalArgumentException("Updated patient details cannot be null.");
        }
        Patient existingPatient = getPatientById(id);

        if (updatedPatient.getAge() != null && updatedPatient.getAge() < 18) {
            validateGuardianDetails(updatedPatient);
            existingPatient.setRequiresGuardian(true);
        } else {
            existingPatient.setRequiresGuardian(false);
            existingPatient.setGuardianDetails(null);
        }

        existingPatient.setName(updatedPatient.getName());
        existingPatient.setAge(updatedPatient.getAge());
        existingPatient.setContactNumber(updatedPatient.getContactNumber());
        existingPatient.setAddress(updatedPatient.getAddress());
        existingPatient.setGender(updatedPatient.getGender());
        existingPatient.setMedicalHistory(updatedPatient.getMedicalHistory());
        existingPatient.setGuardianDetails(updatedPatient.getGuardianDetails());

        return patientRepository.save(existingPatient);
    }

    private void validateGuardianDetails(Patient updatedPatient) {
        if (updatedPatient.getGuardianDetails() == null) {
            throw new RuntimeException("Guardian details are required for patients below 18 years old.");
        }
        if (updatedPatient.getGuardianDetails().getName() == null) {
            throw new RuntimeException("Guardian's name is required for patients below 18 years old.");
        }
        if (updatedPatient.getGuardianDetails().getContactNumber() == null) {
            throw new RuntimeException("Guardian's contact number is required for patients below 18 years old.");
        }
        if (updatedPatient.getGuardianDetails().getRelationship() == null) {
            throw new RuntimeException("Guardian's relationship to the patient is required for patients below 18 years old.");
        }
    }

    //delete patient
    @Override
    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
}
