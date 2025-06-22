package com.carecloud.carecloudehr.model.billing;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)

    private int no;
    private String description;
    private String total;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "fk_no",referencedColumnName = "no")
//    private List<BillDetail> billdetail;
//    @ManyToOne
//    @JoinColumn(name = "fk_no")
//    private BillDetail billDetail;
}


