package com.carecloud.carecloudehr.model.patient;

import com.carecloud.carecloudehr.model.prescription.Prescription;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NonNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "patients")
@Data
public class Patient {
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Prescription> prescriptions = new ArrayList<>();
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Integer age;

    @Column(nullable = false, unique = true)
    private String contactNumber;

    private String address;

    private String gender;

    @Column(length = 500)
    private String medicalHistory;

    private Boolean requiresGuardian;

    @Embedded
    private Guardian guardianDetails;

    private LocalDate createdAt = LocalDate.now();

    // Nested class for guardian details
    @Embeddable
    @Data
    public static class Guardian {
        @Column(name = "guardian_name")
        private String name;

        @Column(name = "guardian_address")
        private String address;

        @Column(name = "guardian_contact_number")
        private String contactNumber;

        @Column(name = "guardian_relationship")
        private String relationship;
    }
}
