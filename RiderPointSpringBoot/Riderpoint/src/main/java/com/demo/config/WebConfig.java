package com.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.demo.Service.JwtService;
import com.demo.Service.LoginService;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private LoginService loginService;
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
	   // super.addInterceptors(registry);

	    registry.addInterceptor(new AuthInterceptor(jwtService,loginService))
	            .excludePathPatterns(
	                    "/auth/**"
	            ).pathMatcher(new AntPathMatcher());
	}
}
