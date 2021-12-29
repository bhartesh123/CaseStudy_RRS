package com.example.demo.model;

public class AuthenticationRequest {

	private String username;
	private String password;
	private String mobileNumber;
	private String email;

	public AuthenticationRequest(String username, String password,String mobileNumber,String email) {
		this.username = username;
		this.password = password;
		this.mobileNumber=mobileNumber;
		this.email=email;
	}

//	public String getMobileNumber1() {
//		return mobileNumber;
//	}
	public String getMobileNumber() {
		// TODO Auto-generated method stub
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public AuthenticationRequest() {
		
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	@Override
	public String toString() {
		return "AuthenticationRequest{" +
				"Email='" + email + '\'' +
				", password='" + password + '\'' +
				'}';
	}

	
}
