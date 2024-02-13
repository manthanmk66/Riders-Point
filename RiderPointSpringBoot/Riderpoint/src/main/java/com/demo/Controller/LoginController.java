package com.demo.Controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;
import com.demo.Service.LoginService;


@RestController
@RequestMapping("/Login")
public class LoginController {
	@Autowired
	private LoginService serv;
	
	@GetMapping("/")
	public String Login(){
		return "Hello";
	}
	@GetMapping("/Getall")
	public List<RpDetails> displayAll(){
		return serv.getAll();
	}
//	@GetMapping("/")
//	public List<Login> Login(@RequestParam String uname,@RequestParam String pass){
//		return serv.validUser( uname,  pass);
//	}
}
