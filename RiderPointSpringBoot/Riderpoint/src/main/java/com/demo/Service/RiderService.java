package com.demo.Service;

import java.util.List;


import com.demo.Dto.RpDetailDTO;
import com.demo.Dto.Rider_route_details_Dto;
import com.demo.Dto.Rider_status_Dto;
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;

public interface RiderService {

	List<RpDetails> getAll();

	List<Rider_route_details> getbyroute(String start, String end);

	Rider_Status addStatus(Rider_Status rsstatus);

	Rider_route_details addRiderRoute(Rider_route_details rroute);


	RpDetails updateRider(RpDetails rider);

	Rider_Status editStatus(Rider_Status rsstatus);

	Rider_route_details editRiderRoute(Rider_route_details rroute);

	RpDetailDTO getRiderbyid(int id);

	Rider_status_Dto getStatusbyid(int id);

	Rider_route_details_Dto getRoutebyid(String id);

	void deleteRiderbyid(String id);

	void deleteStatusbyid(String status_id);

	void deleteRiderRoute(String route_id);

	

}
