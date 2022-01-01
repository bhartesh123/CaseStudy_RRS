package com.admin.AdminContactService.model;

public class AuthenticationRequest {
    private String name;
    private String username;
    private String password;
    private  String mobileNumber;

    public AuthenticationRequest(String name, String username, String password, String mobileNumber) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }

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

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "AuthenticationRequest{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
