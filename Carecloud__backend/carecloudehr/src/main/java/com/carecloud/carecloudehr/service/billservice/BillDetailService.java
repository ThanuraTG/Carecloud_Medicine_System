package com.carecloud.carecloudehr.service.billservice;

import com.carecloud.carecloudehr.dto.billdto.BillDetailDTO;
import com.carecloud.carecloudehr.model.billing.BillDetail;
import com.carecloud.carecloudehr.repository.billrepository.BillDetailsRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@Transactional
public class BillDetailService {
    @Autowired
    private BillDetailsRepo billDetailsRepo;
    @Autowired
    private ModelMapper modelMapper;

    public BillDetailDTO saveBill(BillDetailDTO billDetailDTO){
        billDetailsRepo.save(modelMapper.map(billDetailDTO, BillDetail.class));
        return billDetailDTO;
    }
    public List<BillDetailDTO> getAllBill(){
        List<BillDetail>billList=billDetailsRepo.findAll();
        return modelMapper.map(billList,new TypeToken<List<BillDetailDTO>>(){}.getType());
    }
    public BillDetailDTO updateBill(BillDetailDTO billDetailDTO){
        billDetailsRepo.save(modelMapper.map(billDetailDTO,BillDetail.class));
        return billDetailDTO;
    }
    public boolean deleteBill(BillDetailDTO billDetailDTO){
        billDetailsRepo.delete(modelMapper.map(billDetailDTO, BillDetail.class));
        return true;
    }
    public BillDetailDTO getUseBill(String invoiceNo){
        BillDetail billDetail= billDetailsRepo.getUserByUserId(invoiceNo);
        return modelMapper.map(billDetail,BillDetailDTO.class);
    }
}
