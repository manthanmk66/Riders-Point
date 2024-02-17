package com.demo.Dto;

public class LoginResponse extends BaseResponse {

	private String token;
	public LoginResponse(boolean status, String message) {
		super(status, message);
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

}
