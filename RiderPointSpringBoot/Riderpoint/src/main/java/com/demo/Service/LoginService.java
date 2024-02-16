package com.demo.Service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;



public interface LoginService {

	Boolean validUser(String uname, String pass);

	List<RpDetails> getAll();

	RpDetails addRider(RpDetails rpdetalis);
	
	UserDetails getUserByUserName(String username);

}
