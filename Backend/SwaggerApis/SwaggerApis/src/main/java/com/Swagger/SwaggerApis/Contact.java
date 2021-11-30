package com.Swagger.SwaggerApis;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;

public class Contact {
    @ApiModelProperty(notes = "This is Unique ID")
    private String id;
    @ApiModelProperty(notes = "This is Contact Name")
    private String name;
    @ApiModelProperty(notes = "This is Contact Phone No.")
    private String phone;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
