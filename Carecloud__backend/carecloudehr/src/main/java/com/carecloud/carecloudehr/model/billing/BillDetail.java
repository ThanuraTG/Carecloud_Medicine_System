package com.carecloud.carecloudehr.model.billing;

import com.carecloud.carecloudehr.model.patient.Patient;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "billdetail")
public class BillDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private int invoiceNo;

//    @ManyToOne
//    @JoinColumn(name = "patient_id", nullable = false)
//    private Patient patient;

    private String total;
    private String Date;
    private String roomNo;

//    @ManyToOne
//    @JoinColumn(name = "bill_no", nullable = false)
//    private Bill bill;

//    @ManyToOne
//    @JoinColumn(name = "fk_no")
//    private Bill bill;
//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "details_id",referencedColumnName = "details_id")
//    private List<Bill> bill;
}
