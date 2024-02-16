package com.demo.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import com.demo.Service.JwtService;
import com.demo.Service.LoginService;

public class AuthInterceptor implements HandlerInterceptor {
	
	
	private JwtService jwtService;
	
	
	private LoginService loginService;
	
	
	 public AuthInterceptor(JwtService jwtService, LoginService loginService) {
		super();
		this.jwtService = jwtService;
		this.loginService = loginService;
	}


	@Override
	    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		 
		 System.out.println("In Interceptor");
		 String authHeader = request.getHeader("Authorization");
		 if (authHeader != null && authHeader.startsWith("Bearer ")) {
	            String base64Credentials = authHeader.substring("Bearer ".length());

	   		 //System.out.println(jwtService.extractUsername(base64Credentials));
	         Boolean bl= jwtService.validateToken(base64Credentials, loginService.getUserByUserName(jwtService.extractUsername(base64Credentials)));
	     System.out.print(bl);   
	     return true;
		 }
	       response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
	        return false;
	 }
}
