package com.geraltigas.datastructurebackend.controller;

import com.alibaba.fastjson.JSON;
import com.geraltigas.datastructurebackend.Service.NewsService;
import com.geraltigas.datastructurebackend.Entity.News;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class Controller {

    static public NewsService newsService;

    static {
        try {
            Controller.init();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Controller.test();
    }

    @GetMapping("/getnews/{keywords}/{isContinue}")
    public String getNews(@PathVariable String keywords,@PathVariable int isContinue){
        List<News> reponseList = newsService.getNews(keywords,isContinue);
        System.out.println(keywords);
        String response = JSON.toJSONString(reponseList);
        return response;
    }

    private static void init() throws IOException {
        newsService = new NewsService();
        newsService.init();
    }

    private static void test() {

    }
}
