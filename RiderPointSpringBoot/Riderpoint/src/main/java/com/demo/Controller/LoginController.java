package com.demo.Controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;
import com.demo.Service.JwtService;
import com.demo.Service.LoginService;
import com.demo.dto.LoginResponse;

@RestController
@RequestMapping("/auth")
public class LoginController {
	@Autowired
	private LoginService serv;
	
	@Autowired
	private JwtService jwtService;
	
	/**
	 * @return
	 */
	@PostMapping("/login")
	public LoginResponse Login(@RequestBody Login loginCred){
		
		boolean isValid= serv.validUser(loginCred.getUsername(), loginCred.getPassword());
		LoginResponse response =new LoginResponse(true,"Login succesfully...");
		System.out.println("In Controller");
		if(isValid) {
			//create and add jwt token
			response.setToken(jwtService.generateToken(loginCred.getUsername()));
		}else {
			response.setStatus(false);
			response.setMessage("Username or password not matching.");
		}
		
		return response;
	}
	@GetMapping("/Getall")
	public List<RpDetails> displayAll(){
		return serv.getAll();
	}
	
	@PostMapping("/addData")
	public String Login(@RequestBody RpDetails rpdetalis){
		RpDetails s= serv.addRider(rpdetalis);
				
		if(s!=null)
		{
			return "Data added successfully";
		}
		else
		{
			return "Failed to add please re enter";
		}
	}
}
