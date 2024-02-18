package com.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.demo.Service.LoginService;
import com.demo.Service.LoginServiceImpl;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	 @Autowired
	    private JwtAuthFilter authFilter; 
	  
	    // User Creation 
	    @Bean
	    @Primary
	    public LoginService userDetailsService() { 
	        return new LoginServiceImpl(); 
	    } 
	  
	    // Configuring HttpSecurity 
	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception { 
	        return http.csrf().disable() 
	                .authorizeHttpRequests() 
	                .antMatchers("/auth/login","/auth/register","/Rider/addRiderRoute","/pillion/**").permitAll() 
	                .and() 
	                .authorizeHttpRequests().antMatchers("/**").authenticated()  
	                .and() 
	                .sessionManagement() 
	                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) 
	                .and() 
	                .authenticationProvider(authenticationProvider()) 
	                .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class) 
	                .build(); 
	    } 
	  
	    // Password Encoding 
	    @Bean
	    public PasswordEncoder passwordEncoder() { 
	        return new BCryptPasswordEncoder(); 
	    } 
	  
	    @Bean
	    public AuthenticationProvider authenticationProvider() { 
	        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(); 
	        authenticationProvider.setUserDetailsService(userDetailsService()); 
	        authenticationProvider.setPasswordEncoder(passwordEncoder()); 
	        return authenticationProvider; 
	    } 
	  
	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception { 
	        return config.getAuthenticationManager(); 
	    } 
}
