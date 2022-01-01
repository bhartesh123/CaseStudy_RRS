package com.admin.AdminContactService.model;

public class AuthenticationResponse {
    private String response;

    public AuthenticationResponse(String response) {
        this.response = response;
    }

    public AuthenticationResponse() {
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
