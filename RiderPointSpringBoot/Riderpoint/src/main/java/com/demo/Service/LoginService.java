package com.demo.Service;

import java.util.List;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;



public interface LoginService {

	List<Login> validUser(String uname, String pass);

	List<RpDetails> getAll();

	RpDetails addRider(RpDetails rpdetalis);

}
