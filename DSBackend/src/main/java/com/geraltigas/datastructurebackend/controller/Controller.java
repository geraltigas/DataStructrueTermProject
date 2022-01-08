package com.geraltigas.datastructurebackend.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class Controller {

    @RequestMapping("/hello")
    public String findAll(){
        System.out.println("get all??");
        return "this is my backend";
    }
}
