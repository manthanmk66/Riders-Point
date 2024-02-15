package com.demo.Service;

import java.util.List;

import com.demo.Model.Pillion_Status;
import com.demo.Model.Pillion_route_details;
import com.demo.Model.RpDetails;

public interface PillionService {
	

	List<RpDetails> getAll();

	Pillion_Status addStatus(Pillion_Status pstatus);

	Pillion_route_details addPillionRoute(Pillion_route_details proute);

}
