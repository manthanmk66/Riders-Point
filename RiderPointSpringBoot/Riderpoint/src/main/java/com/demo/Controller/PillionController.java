package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Model.RpDetails;
import com.demo.Service.PillionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/pillion")
public class PillionController {
	@Autowired
	private PillionService pservice;
	
	@GetMapping("/getAll")
	public List<RpDetails> displayAll(){
		return pservice.getAll();
		
	}
	
	
	
	
	
	
	
	

}
