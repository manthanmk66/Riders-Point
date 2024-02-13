package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.RpDetailsDao;
import com.demo.Dao.dao;
import com.demo.Model.Login;
import com.demo.Model.RpDetails;

@Service
public class LoginServiseImpl implements LoginServise {
	@Autowired
	private dao pdao;
	@Autowired
	private RpDetailsDao rp_details_dao;
	
	
	public List<Login> validUser(String uname, String pass) {
		// TODO Auto-generated method stub
		return pdao.findAll();
//		return lst;
	}
	@Override
	public List<RpDetails> getAll() {
		RpDetails rp=new RpDetails(1,"rohit","561516","pune","no","rider");
		rp_details_dao.save(rp);
		RpDetails rp1=new RpDetails(2,"Manthan","66352","pune","no","rider");
		rp_details_dao.save(rp1);
		RpDetails rp2=new RpDetails(3,"Varadraj","99658","pune","no","Pillion");
		rp_details_dao.save(rp2);
		return rp_details_dao.findAll();
	}
	
	
	
}
