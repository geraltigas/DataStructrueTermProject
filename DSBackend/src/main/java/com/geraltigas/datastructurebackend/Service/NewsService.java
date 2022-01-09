package com.geraltigas.datastructurebackend.Service;

import com.geraltigas.datastructurebackend.DAO.DataAccess;
import com.geraltigas.datastructurebackend.Entity.News;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class NewsService {

    private static DataAccess dataAccess;
    private static List<News> newsList;
    private static ArrayList<News> buffer;
    static int pointer;
    static int epoll;

    public void init() throws IOException {
        pointer = 0;
        epoll = 0;
        buffer = new ArrayList<>();
        dataAccess = new DataAccess();
        dataAccess.Fileinit();
        dataAccess.parseString();
        newsList = dataAccess.getData();
        newsList.sort(new News.TimeComparator());
    }

    public List<News> getNews(String keywords,boolean isContinue) { //TODO: complete the reponse algorithm
        List<String> patterns = new ArrayList<String>(Arrays.asList(keywords.split(" ")));
        if (!isContinue) {
            pointer = 0;
            epoll = 0;
        }
        epoll++;
        for (int i = pointer; i < newsList.size(); i++) {
            News temp = newsList.get(i);
            temp.match(patterns);
            boolean hasMatch = false;
            for (int j = 0 ; j < patterns.size(); j++) {
                if (temp.titleCount.get(j) != 0 || temp.contentCount.get(j) != 0) {
                    hasMatch = true;
                    break;
                }
            }
            if (hasMatch) buffer.add(temp);
            if (buffer.size() == (epoll*40 + 10)) {
                pointer = i+1;
                break;
            }
        }
        newsList.sort(new News.PatternComparator());
        List<News> answer = new ArrayList<>();
        if (newsList.size() < 10) return newsList;
        for (int i = 0 ; i < 10; i++) {
            answer.add(newsList.get(i));
        }
        return answer;
    }

}
