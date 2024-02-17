package com.demo.Dto;

public class RegsiterRequest {
	private String name;
	private String username;
	private String password;
	private String address;
	private String mobile;
	private String mode;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	@Override
	public String toString() {
		return "RegsiterRequest [name=" + name + ", username=" + username + ", password=" + password + ", address="
				+ address + ", mobile=" + mobile + ", mode=" + mode + "]";
	}
	
	

}
