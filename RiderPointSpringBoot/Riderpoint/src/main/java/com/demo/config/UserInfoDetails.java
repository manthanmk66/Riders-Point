package com.demo.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.demo.Model.Login;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserInfoDetails implements UserDetails {

	private String name;
	private String password;
	private Integer rpid;
	private List<GrantedAuthority> authorities;

	public UserInfoDetails(Login userInfo) {
		name = userInfo.getUsername();
		password = userInfo.getPassword();
		rpid= userInfo.getId().getId();
		authorities = Arrays.stream(((userInfo.getRoles() != null) ? userInfo.getRoles() : "").split(","))
				.map(SimpleGrantedAuthority::new).collect(Collectors.toList());

	}
	
	

	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public Integer getRpid() {
		return rpid;
	}



	public void setRpid(Integer rpid) {
		this.rpid = rpid;
	}



	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return name;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public String toString() {
		return "UserInfoDetails [name=" + name + ", password=" + password + ", rpid=" + rpid + ", authorities="
				+ authorities + "]";
	}

	
	
}
