package com.demo.Controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		System.out.println("giiii");
		return serv.getAll();
	}
	
		
	@PostMapping("/addStatus")
	public String addStatus(@RequestBody Rider_Status rsstatus){
		
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
	
	
	// All ID operation
	@GetMapping("/getRiderByid/{id}")
	public RpDetails getRiderbyid(@PathVariable String id){
		//post man ---->select-->form data
		return serv.getRiderbyid(id);
	}
	@GetMapping("/getStatusByid/{status_id}")
	public Rider_Status getStatusbyid(@PathVariable String id){
		//post man ---->select-->form data
		return serv.getStatusbyid(id);
	}
	@GetMapping("/getRouteByid/{route_id}")
	public Rider_route_details getRoutebyid(@PathVariable String id){
		//post man ---->select-->form data
		return serv.getRoutebyid(id);
	}	
	
	// All Update operation
	@PutMapping("/editRider")
	public String updaterider(@RequestBody RpDetails rider){
		
		RpDetails s=serv.updateRider(rider);
		if(s!=null)
		{
			return "Status added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	@PutMapping("/editStatus")
	public String editStatus(@RequestBody Rider_Status rsstatus){
		
		Rider_Status s=serv.editStatus(rsstatus);
		if(s!=null)
		{
			return "Status added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	@PutMapping("/addRiderRoute")
	public String editRiderRoute(@RequestBody Rider_route_details rroute){
		Rider_route_details s=serv.editRiderRoute(rroute);
		if(s!=null)
		{
			return "Rider route added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	@DeleteMapping("/deleteRiderByid/{id}")
	public String deleteRiderbyid(@PathVariable String id){
		//post man ---->select-->form data
		serv.deleteRiderbyid(id);
		return "Deleted...";
	}
	@DeleteMapping("/deleteStatusByid/{status_id}")
	public String deleteStatusbyid(@PathVariable String status_id){
		//post man ---->select-->form data
		serv.deleteStatusbyid(status_id);
		return "Deleted...";
	}
	@DeleteMapping("/deleteRiderByid/{route_id}")
	public String deleteRiderRoute(@PathVariable String route_id){
		serv.deleteRiderRoute(route_id);
		return "Deleted...";
	}
	
	
	@PostMapping("/Alert")
	public String sendAlert(@RequestParam String start,@RequestParam String end){
		//post man ---->select-->form data
		
		List<Rider_route_details> lst=serv.getbyroute(start,end);
		// we have to write code for alert 
		return "Some one need help on your route";
	}
	

}
