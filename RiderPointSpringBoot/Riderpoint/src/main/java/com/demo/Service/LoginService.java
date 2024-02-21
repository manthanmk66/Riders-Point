package com.demo.Service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;
import com.demo.Model.Suggestion_table;



public interface LoginService extends UserDetailsService{

	Boolean validUser(String uname, String pass);

	List<RpDetails> getAll();

	RpDetails addRider(RpDetails rpdetalis);
	
	RpDetails getUserByUserName(String username);
	
	Login addUser(Login userInfo);

	Login addLogDetails(Login login);
	
	Suggestion_table addSuggestion(Suggestion_table rpdetalis);

	List<Suggestion_table> getAllSuggestion();
}
