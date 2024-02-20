package com.demo.Controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

import com.demo.Dto.LoginResponse;
import com.demo.Dto.RegisterResponse;
import com.demo.Dto.RegsiterRequest;
import com.demo.Model.Login;
import com.demo.Model.RpDetails;
import com.demo.Service.JwtService;
import com.demo.Service.LoginService;
import com.demo.config.UserInfoDetails;

@RestController
@RequestMapping("/auth")
public class LoginController {
	@Autowired
	private LoginService serv;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	/**
	 * @return
	 */
	@PostMapping("/login")
	public LoginResponse Login(@RequestBody Login loginCred) {
		LoginResponse response = new LoginResponse(true, "Login succesfully...");
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginCred.getUsername(), loginCred.getPassword()));
		System.out.println("here 1");
		if (authentication.isAuthenticated()) {
			response.setToken(jwtService.generateToken(loginCred.getUsername()));
		} else {
			response.setStatus(false);
			response.setMessage("Username or password not matching.");
		}
		System.out.println("here 2");

		return response;
	}

	@PostMapping("/register")
	public RegisterResponse register(@RequestBody RegsiterRequest request) {
		RegisterResponse rResponse = new RegisterResponse(true, "Register successfully...");
		Login cred = new Login();
		RpDetails details = new RpDetails();
		details.setName(request.getName());
		details.setAddress(request.getAddress());
		details.setMobile(request.getMobile());
		details.setMode(request.getMode());

		cred.setUsername(request.getUsername());
		cred.setPassword(request.getPassword());
		cred.setId(details);
		cred.setRoles("USER");

		try {
			serv.addUser(cred);
			rResponse.setUsername(request.getUsername());
		} catch (Exception e) {
			if (e.getMessage().contains("loginrp.UK")) {
				rResponse.setStatus(false);
				rResponse.setMessage("User already exists");
			} else {
				rResponse.setStatus(false);
				rResponse.setMessage(e.getMessage());
			}
		}

		return rResponse;
	}

	@GetMapping("/Getall")
	public List<RpDetails> displayAll() {
		return serv.getAll();
	}

	@PostMapping("/addData")
	public String Login(@RequestBody RpDetails rpdetalis) {
		RpDetails s = serv.addRider(rpdetalis);

		if (s != null) {
			return "Data added successfully";
		} else {
			return "Failed to add please re enter";
		}
	}
	
	@GetMapping("/profile")
	public RpDetails getProfile(){
		UserInfoDetails uDetails=((UserInfoDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
		return serv.getUserByUserName(uDetails.getUsername());
		
	}
}
