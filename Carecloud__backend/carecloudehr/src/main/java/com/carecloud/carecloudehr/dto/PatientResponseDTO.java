package com.carecloud.carecloudehr.dto;

import lombok.Data;

@Data
public class PatientResponseDTO {
    private String name;
    private Integer age;
    private String contactNumber;
    private String address;
    private String gender;
    private String medicalHistory;
    private Boolean requiresGuardian;
    private GuardianDetailsDTO guardianDetails;

    @Data
    public static class GuardianDetailsDTO {
        private String name;
        private String address;
        private String contactNumber;
        private String relationship;
    }
}
