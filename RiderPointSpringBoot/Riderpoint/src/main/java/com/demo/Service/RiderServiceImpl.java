package com.demo.Service;

import java.util.List;

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
public class RiderServiceImpl implements RiderService{
	@Autowired
	private RpDetailsDao rp_details_dao;
	@Autowired
	private Rider_route_Dao rp_route_dao;
	@Autowired
	private Rider_status_dao rp_status_dao;
	@Autowired
	ModelMapper modelMapper;
	
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
	public RpDetailDTO getRiderbyid(int id) {
//		int newId=Integer.parseInt(id);
		RpDetails rp= rp_details_dao.findRiderById(id);
		return modelMapper.map(rp,RpDetailDTO.class);
	}

	@Override
	public Rider_status_Dto getStatusbyid(int id) {
//		int newId=Integer.parseInt(id);
		Rider_Status rp= rp_status_dao.findStatusById(id);
		return modelMapper.map(rp,Rider_status_Dto.class);
	}

	@Override
	public Rider_route_details_Dto getRoutebyid(String id) {
		int newId=Integer.parseInt(id);
		Rider_route_details rp= rp_route_dao.findRoutebyid(newId);
		return modelMapper.map(rp,Rider_route_details_Dto.class);
	}

	

	@Override
	public void deleteRiderbyid(String id) {
		int newId=Integer.parseInt(id);
		 rp_details_dao.deleteById(newId);
	}

	@Override
	public void deleteStatusbyid(String status_id) {
		int newId=Integer.parseInt(status_id);
		rp_status_dao.deleteById(newId);
	}
	@Override
	public void deleteRiderRoute(String route_id) {
		int newId=Integer.parseInt(route_id);
		rp_route_dao.deleteById(newId);
	}
	
	
}
