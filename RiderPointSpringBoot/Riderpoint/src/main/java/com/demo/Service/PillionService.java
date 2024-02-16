package com.demo.Service;

import java.util.List;

import com.demo.Dto.Pillion_Status_Dto;
import com.demo.Dto.Pillion_route_details_Dto;
import com.demo.Dto.RpDetailDTO;
import com.demo.Model.Pillion_Status;
import com.demo.Model.Pillion_route_details;
import com.demo.Model.RpDetails;

public interface PillionService {
	

	List<RpDetails> getAll();

	Pillion_Status addStatus(Pillion_Status pstatus);

	Pillion_route_details addPillionRoute(Pillion_route_details proute);

	List<Pillion_route_details> getByRoute(String start_point, String end_point);

	RpDetailDTO getPillionById(String id);

	Pillion_Status_Dto getStatusById(String status_id);

	Pillion_route_details_Dto getRouteById(String route_id);

	RpDetails updatePillion(RpDetails pillion);

}
