package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.Rider_route_Dao;
import com.demo.Dao.Rider_status_dao;
import com.demo.Dao.RpDetailsDao;
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;
@Service
public class RiderServiceImpl implements RiderService{
	@Autowired
	private RpDetailsDao rp_details_dao;
	@Autowired
	private Rider_route_Dao rp_route_dao;
	@Autowired
	private Rider_status_dao rp_status_dao;
	
	
	@Override
	public List<RpDetails> getAll() {
		return rp_details_dao.getAllriders();
	}
	
	@Override
	public List<Rider_route_details> getbyroute(String start, String end) {
		List<Rider_route_details> lst= rp_route_dao.getbyroute(start,end);
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
	public RpDetails getRiderbyid(String id) {
		int newId=Integer.parseInt(id);
		return rp_details_dao.getById(newId);
	}

	@Override
	public Rider_Status getStatusbyid(String id) {
		int newId=Integer.parseInt(id);
		return rp_status_dao.getById(newId);
	}

	@Override
	public Rider_route_details getRoutebyid(String id) {
		int newId=Integer.parseInt(id);
		return rp_route_dao.getById(newId);
	}
	
	
}
