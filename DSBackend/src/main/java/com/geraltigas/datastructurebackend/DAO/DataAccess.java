package com.geraltigas.datastructurebackend.DAO;

import com.alibaba.fastjson.JSON;
import com.geraltigas.datastructurebackend.Entity.News;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;

@Component
public class DataAccess {
    static public String dataString;
    static public List<News> dataArray;

    public void Fileinit() throws IOException {
        Path path =  Paths.get("target/classes/static/data.txt");
        Scanner scanner = new Scanner(path);
        StringBuilder builder = new StringBuilder();
        int i = 0;
        while(scanner.hasNextLine()) {
            builder.append(scanner.nextLine());
            i++;
        }
        String data = new String(builder);
        dataString = data;
    }


    public void parseString() {
        dataArray = JSON.parseArray(dataString,News.class);
    }

    public List<News> getData() {
        return dataArray;
    }
}
