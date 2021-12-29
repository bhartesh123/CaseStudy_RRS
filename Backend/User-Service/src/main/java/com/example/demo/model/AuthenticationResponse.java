package com.example.demo.model;

public class AuthenticationResponse {
	
	private String response;

	public AuthenticationResponse() {
		
	}

	public AuthenticationResponse(String response) {
		this.response=response;
	}
	
	public String gettoken() {
		return response;
	}

	public void settoken(String response) {
		this.response = response;
	}
	
	
	

}
