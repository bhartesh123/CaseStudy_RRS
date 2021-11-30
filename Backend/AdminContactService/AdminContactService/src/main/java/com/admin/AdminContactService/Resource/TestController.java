package com.admin.AdminContactService.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/helloAdmin")
    public String hello(){
        return "Hello From Admin-Contact";
    }
}
