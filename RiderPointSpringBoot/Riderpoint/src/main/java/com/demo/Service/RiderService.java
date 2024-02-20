package com.demo.Service;

import java.util.List;

<<<<<<< HEAD
=======

>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1
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

<<<<<<< HEAD
	Rider_Status getStatusbyid(int id);
=======
	Rider_status_Dto getStatusbyid(int id);
>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1

	Rider_route_details_Dto getRoutebyid(String id);

	void deleteRiderbyid(String id);

	void deleteStatusbyid(String status_id);

	void deleteRiderRoute(String route_id);

	List<Rider_Status> getMyRides();
	
	List<Rider_Status> getAllRides();

	Rider_Status joinAsRider(Rider_Status riderStatus);
	
	Rider_Status joinAsPillion(Rider_Status riderStatus);
	void revokePillion(Rider_Status riderStatus);
	void deleteRide(Rider_Status riderStatus);
	
	Rider_Status updateRouteDetails(Rider_route_details_Dto routeDetails);
}
