package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dto.Pillion_Status_Dto;
import com.demo.dto.Pillion_route_details_Dto;
import com.demo.dto.RpDetailDTO;
import com.demo.Model.Pillion_Status;
import com.demo.Model.Pillion_route_details;
import com.demo.Model.Rider_Status;
import com.demo.Model.Rider_route_details;
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
	
	@PostMapping("/byRoute")
	public ResponseEntity<List<Pillion_route_details>> getbyroute(@RequestParam String start_point,@RequestParam String end_point){
		//In postman--->select-->Body-->form-data
		List<Pillion_route_details> rlist=pservice.getByRoute(start_point,end_point);
		if(rlist!=null) {
			return ResponseEntity.ok(rlist);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	
	@GetMapping("/getPillion/{id}")
	public ResponseEntity<RpDetailDTO> getPillion(@PathVariable String id){
		RpDetailDTO p = pservice.getPillionById(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@GetMapping("/getStatusById/{status_id}")
	public ResponseEntity<Pillion_Status_Dto> getStatus(@PathVariable String status_id){
		Pillion_Status_Dto ps =pservice.getStatusById(status_id);
		if(ps != null) {
			return ResponseEntity.ok(ps);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@GetMapping("/getRouteById/{route_id}")
	public ResponseEntity<Pillion_route_details_Dto> getRoute(@PathVariable String route_id){
		Pillion_route_details_Dto prd = pservice.getRouteById(route_id);
		if(prd != null) {
			return ResponseEntity.ok(prd);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@PutMapping("/editPillion")
	public ResponseEntity<RpDetails> updatePillion(@RequestBody RpDetails pillion){
		
		RpDetails p= pservice.updatePillion(pillion);
		if(p!=null)
		{
			return ResponseEntity.ok(p);
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@PutMapping("/editStatus")
	public ResponseEntity<Pillion_Status> editStatus(@RequestBody Pillion_Status psstatus){
		
		Pillion_Status ps= pservice.editStatus(psstatus);
		if(ps!=null)
		{
			return ResponseEntity.ok(ps);
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
		}
	}
	@PutMapping("/editPillionRoute")
	public ResponseEntity<Pillion_route_details> editRiderRoute(@RequestBody Pillion_route_details proute){
		Pillion_route_details prd = pservice.editPillionRoute(proute);
		if(prd!=null)
		{
			return ResponseEntity.ok(prd);
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
		}
	}
	
	@DeleteMapping("/deletePillionByid/{id}")
	public ResponseEntity<String> deletePillionbyid(@PathVariable String id){
		//post man ---->select-->form data
		boolean status = pservice.deletePillionById(id);
		if(status) {
			return ResponseEntity.ok("Pillion Data Deleted Successfully!");
		}else{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	

}
