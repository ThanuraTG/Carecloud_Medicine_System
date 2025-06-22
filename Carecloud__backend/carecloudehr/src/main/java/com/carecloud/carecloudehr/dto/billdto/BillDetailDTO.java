package com.carecloud.carecloudehr.dto.billdto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class BillDetailDTO {
    private int invoiceNo;
    private String total;
    private String Date;
    private String roomNo;

}
