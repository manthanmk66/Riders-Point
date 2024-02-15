package com.demo.Service;

import java.util.List;

import com.demo.Model.Pillion_Status;
import com.demo.Model.RpDetails;

public interface PillionService {
	

	List<RpDetails> getAll();

	Pillion_Status addStatus(Pillion_Status pstatus);

}
