package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.PillionRouteDetailsDao;
import com.demo.Dao.PillionStatusDao;
import com.demo.Dao.RpDetailsDao;
import com.demo.Model.Pillion_Status;
import com.demo.Model.Pillion_route_details;
import com.demo.Model.RpDetails;

@Service
public class PillionServiceImpl implements PillionService {
	
	@Autowired
	private RpDetailsDao rp_details_dao;
	@Autowired
	private PillionStatusDao ps_dao;
	@Autowired PillionRouteDetailsDao prd_dao;

	@Override
	public List<RpDetails> getAll() {
		return rp_details_dao.getAllPillions();
	}

	@Override
	public Pillion_Status addStatus(Pillion_Status pstatus) {
		return ps_dao.save(pstatus);
		
	}

	@Override
	public Pillion_route_details addPillionRoute(Pillion_route_details proute) {
		return prd_dao.save(proute);
	}

}
