package com.carecloud.carecloudehr.service.medicalrecord;

import com.carecloud.carecloudehr.model.medicalrecord.MedicalRecord;
import com.carecloud.carecloudehr.model.patient.Patient;
import com.carecloud.carecloudehr.repository.medicalrecord.MedicalRecordRepository;
import com.carecloud.carecloudehr.service.patient.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalRecordService {
    @Autowired
    private MedicalRecordRepository medicalRecordRepository;

    @Autowired
    private PatientService patientService;

    public MedicalRecord saveMedicalRecord(Long patientId, MedicalRecord medicalRecord){
        Patient patient = patientService.getPatientById(patientId); // Ensures the patient exists
        medicalRecord.setPatient(patient);
        return medicalRecordRepository.save(medicalRecord);
    }

    public List<MedicalRecord> getMedicalRecordsByPatient(Long patientId) {
        return medicalRecordRepository.findByPatientId(patientId);
    }

    public MedicalRecord updateMedicalRecord(Long recordId, MedicalRecord updatedRecord) {
        MedicalRecord existingRecord = medicalRecordRepository.findById(recordId)
                .orElseThrow(() -> new RuntimeException("Medical record not found"));
        existingRecord.setSymptoms(updatedRecord.getSymptoms());
        existingRecord.setDiagnosis(updatedRecord.getDiagnosis());
        existingRecord.setTreatmentPlan(updatedRecord.getTreatmentPlan());
        existingRecord.setVisitDate(updatedRecord.getVisitDate());
        return medicalRecordRepository.save(existingRecord);
    }

    public void deleteMedicalRecord(Long recordId) {
        medicalRecordRepository.deleteById(recordId);
    }
}
