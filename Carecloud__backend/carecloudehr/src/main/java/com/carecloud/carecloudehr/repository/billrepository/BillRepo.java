package com.carecloud.carecloudehr.repository.billrepository;

import com.carecloud.carecloudehr.model.billing.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BillRepo extends JpaRepository<Bill,Integer> {
    @Query(value = "SELECT * FROM Bill WHERE no = ?1" , nativeQuery = true)
    Bill getUserByUserId(String No);
}
