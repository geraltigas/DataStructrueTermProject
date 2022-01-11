package com.geraltigas.datastructurebackend.DAO;

import com.alibaba.fastjson.JSON;
import com.geraltigas.datastructurebackend.Entity.News;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class DataAccess {
    static public ArrayList<Path> pathArrayList;
    static public List<News> dataArray;

    public void Fileinit() throws IOException {
        pathArrayList = new ArrayList<>();
        dataArray = new ArrayList<>();
        Path path =  Paths.get("target/classes/static/data.txt");
        pathArrayList.add(path);
        Path path1 = Paths.get("target/classes/static/data1.txt");
        pathArrayList.add(path1);
//        Path path2 = Paths.get("target/classes/static/data2.txt");
//        pathArrayList.add(path2);
        List<News> tempArray = null;
        for (int i = 0; i < pathArrayList.size(); i++) {
            Path temp = pathArrayList.get(i);
            Scanner scanner = new Scanner(temp);
            StringBuilder builder = new StringBuilder();
            while(scanner.hasNextLine()) {
                builder.append(scanner.nextLine());
            }
            String data = new String(builder);
            tempArray = JSON.parseArray(data,News.class);
            dataArray.addAll(tempArray);
            tempArray.clear();
            scanner.close();
        }
        System.out.println(dataArray.size());
    }

    public List<News> getData() {
        return dataArray;
    }
}
