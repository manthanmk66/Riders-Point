package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.RpDetailsDao;
import com.demo.Model.RpDetails;
@Service
public class RiderServiceImpl implements RiderService{
	@Autowired
	private RpDetailsDao rp_details_dao;
	
	
	@Override
	public List<RpDetails> getAll() {
		return rp_details_dao.getAllriders();
	}
	
	@Override
	public List<RpDetails> getbyroute(String start, String end) {
		return rp_details_dao.getbyroute(start,end);
	}
	
}
