package com.demo.Service;

import java.util.List;

import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;

public interface RiderService {

	List<RpDetails> getAll();

	List<Rider_route_details> getbyroute(String start, String end);

	Rider_Status addStatus(Rider_Status rsstatus);

	Rider_route_details addRiderRoute(Rider_route_details rroute);

}
