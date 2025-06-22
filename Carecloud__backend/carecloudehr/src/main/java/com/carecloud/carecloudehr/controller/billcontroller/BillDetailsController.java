package com.carecloud.carecloudehr.controller.billcontroller;

import com.carecloud.carecloudehr.dto.billdto.BillDetailDTO;
import com.carecloud.carecloudehr.service.billservice.BillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/billdetail")
public class BillDetailsController {
    @Autowired
    private BillDetailService billDetailService;


    @GetMapping("/getdetail")
    public List<BillDetailDTO> getAllBill(){
        return billDetailService.getAllBill();
    }
    @PostMapping("/savedetail")
    public BillDetailDTO saveBill(@RequestBody BillDetailDTO billDetailDTO){
        return billDetailService.saveBill(billDetailDTO);
    }
    @PutMapping("/updatedetail")
    public BillDetailDTO updateBill(@RequestBody BillDetailDTO billDetailDTO){
        return billDetailService.updateBill(billDetailDTO);
    }
    @DeleteMapping("/deletedetail")
    public boolean deleteBill(@RequestBody BillDetailDTO billDetailDTO){
        return billDetailService.deleteBill(billDetailDTO);
    }
    @GetMapping("/getdetail/{invoiceNo}")
    public BillDetailDTO getUseBill(@PathVariable String invoiceNo) {
        return billDetailService.getUseBill(invoiceNo);
    }
}
