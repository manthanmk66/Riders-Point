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
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;
import com.demo.Service.LoginService;
import com.demo.Service.RiderService;


@RestController
@RequestMapping("/Rider")
public class RiderController {
	@Autowired
	private RiderService serv;
	
	@GetMapping("/Getall")
	public List<RpDetails> displayAll(){
		return serv.getAll();
	}
	
	@PostMapping("/addStatus")
	public String addStatus(@RequestBody Rider_Status rsstatus){
		System.out.println("inside rp con");
		System.out.println(rsstatus.getStatus_id()+" "+rsstatus.getRp_id());
		Rider_Status s=serv.addStatus(rsstatus);
		if(s!=null)
		{
			return "Status added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	@PostMapping("/addRiderRoute")
	public String addRiderRoute(@RequestBody Rider_route_details rroute){
		Rider_route_details s=serv.addRiderRoute(rroute);
		if(s!=null)
		{
			return "Rider route added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	
	@PostMapping("/Byroute")
	public List<Rider_route_details> getbyroute(@RequestParam String start,@RequestParam String end){
		//post man ---->select-->form data
		return serv.getbyroute(start,end);
	}
	
	

}
