package com.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Dao.dao;
import com.demo.Model.Login;
import com.demo.Model.RpDetails;

@Service
public class LoginServiseImpl implements LoginServise {
	@Autowired
	 private dao pdao;
	public List<Login> validUser(String uname, String pass) {
		// TODO Auto-generated method stub
		return pdao.findAll();
//		return lst;
	}
	
	
	
}
