package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.Rider_route_Dao;
import com.demo.Dao.Rider_status_dao;
import com.demo.Dao.RpDetailsDao;
import com.demo.Dto.Rider_route_details_Dto;
import com.demo.Dto.Rider_status_Dto;
import com.demo.Dto.RpDetailDTO;
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;

@Service
public class RiderServiceImpl implements RiderService {
	@Autowired
	private RpDetailsDao rp_details_dao;
	@Autowired
	private Rider_route_Dao rp_route_dao;
	@Autowired
	private Rider_status_dao rp_status_dao;
	@Autowired
	ModelMapper modelMapper;

	@Autowired
	JwtService jwtService;

	@Override
	public List<RpDetails> getAll() {
		return rp_details_dao.getAllriders();
	}

	@Override
	public List<Rider_route_details> getbyroute(String start, String end) {
		List<Rider_route_details> lst = rp_route_dao.getbyroute(start, end);
		return lst;
	}

	@Override
	public Rider_Status addStatus(Rider_Status rsstatus) {
		return rp_status_dao.save(rsstatus);
	}

	@Override
	public Rider_route_details addRiderRoute(Rider_route_details rroute) {
		return rp_route_dao.save(rroute);
	}

	@Override
	public RpDetails updateRider(RpDetails rider) {
		return rp_details_dao.save(rider);
	}

	@Override
	public Rider_Status editStatus(Rider_Status rsstatus) {
		return rp_status_dao.save(rsstatus);
	}

	@Override
	public Rider_route_details editRiderRoute(Rider_route_details rroute) {
		return rp_route_dao.save(rroute);
	}

	@Override
	public RpDetailDTO getRiderbyid(int id) {
//		int newId=Integer.parseInt(id);
		RpDetails rp = rp_details_dao.findRiderById(id);
		return modelMapper.map(rp, RpDetailDTO.class);
	}

	@Override
	public Rider_Status getStatusbyid(int id) {
		return rp_status_dao.findById(id).get();

	}

	@Override
	public Rider_route_details_Dto getRoutebyid(String id) {
		int newId = Integer.parseInt(id);
		Rider_route_details rp = rp_route_dao.findRoutebyid(newId);
		return modelMapper.map(rp, Rider_route_details_Dto.class);
	}

	@Override
	public void deleteRiderbyid(String id) {
		int newId = Integer.parseInt(id);
		rp_details_dao.deleteById(newId);
	}

	@Override
	public void deleteStatusbyid(String status_id) {
		int newId = Integer.parseInt(status_id);
		rp_status_dao.deleteById(newId);
	}

	@Override
	public void deleteRiderRoute(String route_id) {
		int newId = Integer.parseInt(route_id);
		rp_route_dao.deleteById(newId);
	}

	@Override
	public List<Rider_Status> getAllRides() {
		return rp_status_dao.findAll();
	}

	@Override
	public List<Rider_Status> getMyRides() {
		return rp_status_dao.getByRpId(jwtService.getCurrentUser().getRpid());
	}

	@Override
	public Rider_Status joinAsRider(Rider_Status riderStatus) {
		return rp_status_dao.save(riderStatus);
	}

	@Override
	public Rider_Status joinAsPillion(Rider_Status riderStatus) {
		Optional<Rider_Status> rStatus = rp_status_dao.findById(riderStatus.getStatus_id());
		RpDetails rDetails = new RpDetails();
		rDetails.setId(jwtService.getCurrentUser().getRpid());
		rStatus.get().setPillon(rDetails);
		rp_status_dao.save(rStatus.get());
		return null;
	}

	@Override
	public void revokePillion(Rider_Status riderStatus) {
		Rider_Status rStatus = rp_status_dao.findById(riderStatus.getStatus_id()).get();
		rStatus.setPillon(null);
		rp_status_dao.save(rStatus);

	}

	@Override
	public void deleteRide(Rider_Status riderStatus) {
		int rpId = jwtService.getCurrentUser().getRpid();
		Rider_Status rStatus = rp_status_dao.findById(riderStatus.getStatus_id()).get();
		if (rStatus.getRouteDetails().getCreatedBy().getId() == rpId) {
			rp_route_dao.deleteById(rStatus.getRouteDetails().getRoute_id());
		} else {
			rp_status_dao.deleteById(riderStatus.getStatus_id());
		}
	}

	@Override
	public Rider_Status updateRouteDetails(Rider_route_details_Dto routeDetails) {
		Rider_route_details rDetails = rp_route_dao.findById(routeDetails.getRoute_id()).get();
		rDetails.setStart_point(routeDetails.getStart_point());
		rDetails.setEnd_point(routeDetails.getEnd_point());
		rDetails.setTravel_date(routeDetails.getTravel_date());
		rDetails.setStart_time(routeDetails.getStart_time());
		rDetails.setEnd_time(routeDetails.getEnd_time());
		rp_route_dao.save(rDetails);
		Rider_Status rStatus = rp_status_dao.findById(routeDetails.getStatus_id()).get();
		rStatus.setBike(routeDetails.getBike());
		rStatus.setExpense(routeDetails.getExpense());
		rStatus.setLicense(routeDetails.getLicense());
		rStatus.setWantPillion(routeDetails.getWantPillion());
		return rp_status_dao.save(rStatus);

	}

}
