package com.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Service.LoginService;

@RestController
@RequestMapping("/pillion")
public class PillionController {
	@Autowired
	private LoginService service;
	
	
	
	

}
