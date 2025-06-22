package com.carecloud.carecloudehr.controller.billcontroller;

import com.carecloud.carecloudehr.dto.billdto.BillDTO;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.billservice.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/bill")

public class BillController {
    @Autowired
    private BillService billService;

    @Autowired
    private AuditLogService auditLogService;

    @GetMapping("/get")
    public List<BillDTO> getAllBill() {
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "GET_ALL_BILLS",
                "Got all Bills"
        );
        return billService.getAllBill();
    }

    @PostMapping("/save")
    public BillDTO saveBill(@RequestBody BillDTO billDTO) {
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "CREATE_BILL",
                "Created the bill"
        );
        return billService.saveBill(billDTO);
    }

    @PutMapping("/update")
    public BillDTO updateBill(@RequestBody BillDTO billDTO) {
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "UPDATE_BILL",
                "Updated the bill"
        );
        return billService.updateBill(billDTO);
    }

    @DeleteMapping("/delete")
    public boolean deleteBill(@RequestBody BillDTO billDTO) {
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "DELETE_BILL",
                "Deleted the bill"
        );
        return billService.deleteBill(billDTO);
    }

    @GetMapping("/get/{No}")
    public BillDTO getUseBill(@PathVariable String No) {
        // Audit log
        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "GET_BILL: " + No,
                "Get the Bill"
        );
        return billService.getUseBill(No);

    }

    @DeleteMapping("/delete/{No}")
    public ResponseEntity<String> deleteBill(@PathVariable int No) {
        try {
            billService.deleteBillById(No);
            // Audit log
            auditLogService.logAction(
                    getCurrentUsername(),
                    getCurrentUserRole(),
                    "DELETE_BILL: " + No,
                    "Deleted Bill"
            );
            return ResponseEntity.ok("Bill deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete bill.");
        }
    }

    // Helper methods to get the current user's username and role
    private String getCurrentUsername() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof org.springframework.security.core.userdetails.User) {
            return ((org.springframework.security.core.userdetails.User) principal).getUsername();
        } else if (principal instanceof String) {
            return (String) principal; // In some cases, the principal might still be a String
        } else {
            throw new IllegalStateException("Unexpected principal type: " + principal.getClass());
        }
    }


    private String getCurrentUserRole() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst()
                .orElse("UNKNOWN_ROLE");
    }
}
