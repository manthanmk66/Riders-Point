package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Dto.RpDetailDTO;
import com.demo.Model.Pillion_Status;
import com.demo.Model.Pillion_route_details;
import com.demo.Model.RpDetails;
import com.demo.Service.PillionService;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize
@CrossOrigin("*")
@RestController
@RequestMapping("/pillion")
public class PillionController {
	@Autowired
	private PillionService pservice;
	
	
	@GetMapping("/getAll")
	public ResponseEntity<List<RpDetails>> displayAll(){
		return ResponseEntity.ok(pservice.getAll());
		
	}
	
	@PostMapping("/addStatus")
	public ResponseEntity<String> addStatus(@RequestBody Pillion_Status pstatus){
		Pillion_Status p=pservice.addStatus(pstatus);
		if(p!=null)
		{
			return ResponseEntity.ok("Data Added");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	@PostMapping("/addPillionRoute")
	public ResponseEntity<String> addRiderRoute(@RequestBody Pillion_route_details proute){
		Pillion_route_details s=pservice.addPillionRoute(proute);
		if(s!=null)
		{
			return ResponseEntity.ok("Route Added!");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/byRoute")
	public ResponseEntity<List<Pillion_route_details>> getbyroute(@RequestParam String start_point,@RequestParam String end_point){
		//In postman--->select-->Body-->formdata
		List<Pillion_route_details> rlist=pservice.getByRoute(start_point,end_point);
		if(rlist!=null) {
			return ResponseEntity.ok(rlist);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	@GetMapping("/getPillion/{id}")
	public ResponseEntity<RpDetailDTO> getPillion(@PathVariable String id){
		//post man ---->select-->form data
		RpDetailDTO p = pservice.getPillionById(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	

}
