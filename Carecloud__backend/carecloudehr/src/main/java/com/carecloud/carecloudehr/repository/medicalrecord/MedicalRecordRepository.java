package com.carecloud.carecloudehr.repository.medicalrecord;

import com.carecloud.carecloudehr.model.medicalrecord.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
    List<MedicalRecord> findByPatientId (Long patientId);
}
