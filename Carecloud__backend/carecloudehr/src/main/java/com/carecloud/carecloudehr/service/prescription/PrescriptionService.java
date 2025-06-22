package com.carecloud.carecloudehr.service.prescription;

import com.carecloud.carecloudehr.model.patient.Patient;
import com.carecloud.carecloudehr.model.prescription.Prescription;
import com.carecloud.carecloudehr.repository.prescription.PrescriptionRepository;
import com.carecloud.carecloudehr.service.patient.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @Autowired
    private PatientService patientService;

    public Prescription addPrescription(Long patientId, Prescription prescription) {
        Patient patient = patientService.getPatientById(patientId);
        prescription.setPatient(patient);
        return prescriptionRepository.save(prescription);
    }

    public Prescription updatePrescription(Long prescriptionId, Prescription updatedPrescription) {
        Prescription existingPrescription = prescriptionRepository.findById(prescriptionId)
                .orElseThrow(() -> new RuntimeException("Prescription not found with ID: " + prescriptionId));

        existingPrescription.setMedicineName(updatedPrescription.getMedicineName());
        existingPrescription.setDosage(updatedPrescription.getDosage());
        existingPrescription.setFrequency(updatedPrescription.getFrequency());
        existingPrescription.setDuration(updatedPrescription.getDuration());
        existingPrescription.setNotes(updatedPrescription.getNotes());

        return prescriptionRepository.save(existingPrescription);
    }

    public List<Prescription> getPrescriptionsByPatientId(Long patientId) {
        return prescriptionRepository.findByPatientId(patientId);
    }
}
