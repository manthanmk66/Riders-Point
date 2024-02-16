package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.demo.Dao.Dao;
import com.demo.Dao.RpDetailsDao;
import com.demo.Dao.Dao;
import com.demo.Model.Login;
import com.demo.Model.RpDetails;
import com.demo.config.CustomUserDetails;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private Dao pdao;
	@Autowired
	private RpDetailsDao rp_details_dao;
	
	
	public Boolean validUser(String uname, String pass) {
		// TODO Auto-generated method stub
		System.out.println(pdao.getUser(uname, pass));
		return pdao.getUser(uname, pass).size()>0;
		
//		return lst;
	}
	@Override
	public List<RpDetails> getAll() {

//		RpDetails rp=new RpDetails(1,"rohit","561516","pune","no","rider");
//		rp_details_dao.save(rp);
//		RpDetails rp1=new RpDetails(2,"Manthan","66352","pune","no","rider");
//		rp_details_dao.save(rp1);
//		RpDetails rp2=new RpDetails(3,"Varadraj","99658","pune","no","Pillion");
//		rp_details_dao.save(rp2);

	
		return rp_details_dao.findAll();
	}
	@Override
	public RpDetails addRider(RpDetails rpdetalis) {
		return rp_details_dao.save(rpdetalis);
	}
	@Override
	public UserDetails getUserByUserName(String username) {
	System.out.println(username);
		return new CustomUserDetails(pdao.getUser(username));
	}
	
	
	
}
