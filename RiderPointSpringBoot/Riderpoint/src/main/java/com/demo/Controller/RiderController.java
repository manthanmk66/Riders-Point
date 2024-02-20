package com.demo.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Dto.AddRideRouteResponse;
import com.demo.Dto.BaseResponse;
import com.demo.Dto.JoinAsPillionRequest;
import com.demo.Dto.JoinAsRiderRequest;
import com.demo.Dto.Rider_route_details_Dto;
import com.demo.Dto.Rider_status_Dto;
import com.demo.Dto.RpDetailDTO;
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;
import com.demo.Service.JwtService;
import com.demo.Service.RiderService;
import com.demo.config.UserInfoDetails;

@RestController
@RequestMapping("/Rider")
public class RiderController {
	@Autowired
	private RiderService serv;

	@Autowired
	private JwtService jwtService;

	@GetMapping("/Getall")
	public List<RpDetails> displayAll() {

		return serv.getAll();
	}

	@PostMapping("/addStatus")
	public String addStatus(@RequestBody Rider_Status rsstatus) {

		Rider_Status s = serv.addStatus(rsstatus);
		if (s != null) {
			return "Status added";
		} else {
			return "Failed to add plz re enter";
		}
	}

	@PostMapping("/addRiderRoute")
	public AddRideRouteResponse addRiderRoute(@RequestBody Rider_route_details_Dto rroute) {
		UserInfoDetails currentUser = jwtService.getCurrentUser();
		System.out.println(currentUser);
		RpDetails rpDetails = new RpDetails();
		rpDetails.setId(currentUser.getRpid());
		Rider_Status status = new Rider_Status(rpDetails, rroute.getBike(), rroute.getExpense(), rroute.getLicense(),
				rroute.getWantPillion(), null);

		Rider_route_details rDetails = new Rider_route_details(Arrays.asList(status), rroute.getStart_point(),
				rroute.getEnd_point(), rroute.getTravel_date(), rroute.getStart_time(), rroute.getEnd_time(), "");
		status.setRouteDetails(rDetails);
		rDetails.setCreatedBy(rpDetails);
		Rider_route_details s = serv.addRiderRoute(rDetails);
		AddRideRouteResponse response = new AddRideRouteResponse(true, "Ride Added successfully");
		if (s == null) {
			response.setStatus(false);
			response.setMessage("Error in adding route");
		}
		return response;
	}

	@GetMapping("/allRides")
	public List<Rider_Status> getAllRides() {
		return serv.getAllRides();
	}

	@GetMapping("/myRides")
	public List<Rider_Status> getMyRides() {
		return serv.getMyRides();
	}

	@GetMapping("/myRides/{status_id}")
	public Rider_Status getOneRideDetail(@PathVariable int status_id) {
		return serv.getStatusbyid(status_id);
	}

	@PostMapping("/joinAsRider")
	public Rider_Status joinAsRider(@RequestBody JoinAsRiderRequest req) {
		RpDetails rDetails = new RpDetails();
		rDetails.setId(jwtService.getCurrentUser().getRpid());
		Rider_route_details routeDetails = new Rider_route_details();
		routeDetails.setRoute_id(req.getRoute_id());
		Rider_Status rStatus = new Rider_Status(rDetails, req.getBike(), req.getExpense(), req.getLicense(),
				req.getWantPillion(), null, routeDetails);
		return serv.joinAsRider(rStatus);
	}

	@PostMapping("/joinAsPillion")
	public Rider_Status joinAsPillion(@RequestBody JoinAsPillionRequest req) {

		Rider_Status rStatus = new Rider_Status();
		rStatus.setStatus_id(req.getStatus_id());
		return serv.joinAsPillion(rStatus);
	}
	@PostMapping("/revokePillon")
	public BaseResponse revokePillion(@RequestBody JoinAsPillionRequest req) {

		Rider_Status rStatus = new Rider_Status();
		rStatus.setStatus_id(req.getStatus_id());
		serv.revokePillion(rStatus);
		return new BaseResponse(true, "Revoked");
	}

	@PostMapping("/deleteRide")
	public BaseResponse deleteRide(@RequestBody JoinAsPillionRequest req) {

		Rider_Status rStatus = new Rider_Status();
		rStatus.setStatus_id(req.getStatus_id());
		serv.deleteRide(rStatus);
		return new BaseResponse(true, "ride deleted..");
	}

	@PostMapping("/updateRideDetail")
	public Rider_Status updateOneRideDetail(@RequestBody Rider_route_details_Dto rStatus) {
		return serv.updateRouteDetails(rStatus);
	}

	@PostMapping("/Byroute")
	public List<Rider_route_details> getbyroute(@RequestParam String start, @RequestParam String end) {
		// post man ---->select-->form data
		return serv.getbyroute(start, end);
	}

	// All ID operation
	@GetMapping("/getRiderByid/{id}")
	public RpDetailDTO getRiderbyid(@PathVariable int id) {
		System.out.println("asdfa");
		return serv.getRiderbyid(id);

	}

	@GetMapping("/getStatusByid/{status_id}")
	public Rider_Status getStatusbyid(@PathVariable int status_id) {
		return serv.getStatusbyid(status_id);
	}

	@GetMapping("/getRouteByid/{route_id}")
	public Rider_route_details_Dto getRoutebyid(@PathVariable String route_id) {
		return serv.getRoutebyid(route_id);
	}

	// All Update operation
	@PutMapping("/editRider")
	public String updaterider(@RequestBody RpDetails rider) {

		RpDetails s = serv.updateRider(rider);
		if (s != null) {
			return "Status added";
		} else {
			return "Failed to add plz re enter";
		}
	}

	@PutMapping("/editStatus")
	public String editStatus(@RequestBody Rider_Status rsstatus) {

		Rider_Status s = serv.editStatus(rsstatus);
		if (s != null) {
			return "Status added";
		} else {
			return "Failed to add plz re enter";
		}
	}

	@PutMapping("/addRiderRoute")
	public String editRiderRoute(@RequestBody Rider_route_details rroute) {
		Rider_route_details s = serv.editRiderRoute(rroute);
		if (s != null) {
			return "Rider route added";
		} else {
			return "Failed to add plz re enter";
		}
	}

	@DeleteMapping("/deleteRiderByid/id/{id}")
	public String deleteRiderbyid(@PathVariable String id) {
		System.out.println("sdf");
		serv.deleteRiderbyid(id);
		return "Deleted...";
	}

	@DeleteMapping("/deleteStatusByid/status_id/{status_id}")
	public String deleteStatusbyid(@PathVariable String status_id) {
		serv.deleteStatusbyid(status_id);
		return "Deleted...";
	}

	@DeleteMapping("/deleteRiderByid/route_id/{route_id}")
	public String deleteRiderRoute(@PathVariable String route_id) {
		serv.deleteRiderRoute(route_id);
		return "Deleted...";
	}

	@PostMapping("/Alert")
	public String sendAlert(@RequestParam String start, @RequestParam String end) {
		// post man ---->select-->form data

		List<Rider_route_details> lst = serv.getbyroute(start, end);
		// we have to write code for alert
		return "Some one need help on your route";
	}

}
