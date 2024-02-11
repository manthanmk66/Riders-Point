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
import com.demo.Service.LoginServise;
import com.demo.model.Pillion_route_details;
import com.demo.service.PillionService;
import com.demo.service.ServiceImpl;

@RestController
public class LoginController {
	@Autowired
	private LoginServise serv;
	
	@GetMapping("/")
	public List<Login> Login(@RequestParam String uname,@RequestParam String pass){
		/* i want to add login page here */
		return serv.validUser( uname,  pass);
	}
	
//	
//	@GetMapping("/pillionlist")
//	public ModelAndView getAll(){
//		List<Pillion_route_details> lst=serv.getall();
//		return new ModelAndView("msg","lst",lst);
//	}
//	
//	@GetMapping("/form1")
//	public String displaForm()
//	{
//		return "form";
//	}
//	@GetMapping("/formData")
//	public ModelAndView addRoute(@RequestParam String rid,@RequestParam String status_id,@RequestParam String startpoint,@RequestParam String endpoint ,@RequestParam Date dt,@RequestParam String des)
//	{
//		System.out.println("hii");
//		serv.addData(rid,status_id,startpoint,endpoint,dt,des);
//		
//		return new ModelAndView("redirect:/pillionlist");
//	}
//	
//	@GetMapping("/editform/{route_id}")
//	public ModelAndView displaForm(@PathVariable String route_id)
//	{
//		Pillion_route_details p=serv.searchById(route_id);
//		
//		return new ModelAndView("editById","p",p);
//	}
//	
//	@PostMapping("/updateform")
//	public ModelAndView displaForm2(@RequestParam String rid,@RequestParam String status_id,@RequestParam String startpoint,@RequestParam String endpoint ,@RequestParam Date dt,@RequestParam String des)
//	{
//		serv.updateP(rid,status_id,startpoint,endpoint,dt,des);
//		return new ModelAndView("redirect:/pillionlist");
//	}
//	
//	@GetMapping("/deleteform/{route_id}")
//	public ModelAndView deleteByid(@PathVariable String route_id)
//	{
//		serv.deletebyId(route_id);
//		
//		return new ModelAndView("redirect:/pillionlist");
//	}
	
}
