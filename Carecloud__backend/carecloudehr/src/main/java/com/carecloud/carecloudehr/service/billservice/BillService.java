package com.carecloud.carecloudehr.service.billservice;

import com.carecloud.carecloudehr.dto.billdto.BillDTO;
import com.carecloud.carecloudehr.model.billing.Bill;
import com.carecloud.carecloudehr.repository.billrepository.BillRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional

public class BillService {
    @Autowired
    private BillRepo billRepo;
    @Autowired
    private ModelMapper modelMapper;

    public BillDTO saveBill(BillDTO billDTO){
        billRepo.save(modelMapper.map(billDTO, Bill.class));
        return billDTO;
    }
    public List<BillDTO> getAllBill(){
        List<Bill>billList=billRepo.findAll();
        return modelMapper.map(billList,new TypeToken<List<BillDTO>>(){}.getType());
    }
    public BillDTO updateBill(BillDTO billDTO){
        billRepo.save(modelMapper.map(billDTO,Bill.class));
        return billDTO;
    }
    public boolean deleteBill(BillDTO billDTO){
        billRepo.delete(modelMapper.map(billDTO, Bill.class));
        return true;
    }
    public BillDTO getUseBill(String No){
        Bill bill= billRepo.getUserByUserId(No);
        return modelMapper.map(bill,BillDTO.class);
    }
    public void deleteBillById(int No) {
        billRepo.deleteById(No);
    }

}
