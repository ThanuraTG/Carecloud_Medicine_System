package com.carecloud.carecloudehr.repository.billrepository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.carecloud.carecloudehr.model.billing.BillDetail;
import org.springframework.data.jpa.repository.Query;

public interface BillDetailsRepo extends JpaRepository<BillDetail,Integer> {

    @Query(value = "SELECT * FROM BillDetail WHERE invoice_id = ?1" , nativeQuery = true)
    BillDetail getUserByUserId(String invoiceNo);

}
