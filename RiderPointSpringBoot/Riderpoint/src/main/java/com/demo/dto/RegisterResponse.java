package com.demo.dto;

public class RegisterResponse extends BaseResponse {
	
	private String username;
	
	public RegisterResponse(boolean status, String message) {
		super(status, message);
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	

}
