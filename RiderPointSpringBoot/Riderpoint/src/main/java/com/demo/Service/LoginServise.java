package com.demo.Service;

import java.util.List;

import com.demo.Model.Login;



public interface LoginServise {

	List<Login> validUser(String uname, String pass);

}
