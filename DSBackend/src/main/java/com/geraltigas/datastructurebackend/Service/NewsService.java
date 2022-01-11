package com.geraltigas.datastructurebackend.Service;

import com.geraltigas.datastructurebackend.DAO.DataAccess;
import com.geraltigas.datastructurebackend.Entity.News;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class NewsService {

    private static DataAccess dataAccess;
    private static List<News> newsList;
    private static PriorityQueue<News> buffer;
    private static Stack<Integer> indexStack;
    private static ArrayList<ArrayList<News>> answerArray;
    static int pointer;
    static int epoll;

    public void init() throws IOException {
        pointer = 0;
        epoll = 0;
        buffer = new PriorityQueue<>(new News.PatternComparator());
        dataAccess = new DataAccess();
        answerArray = new ArrayList<>();
        indexStack = new Stack<>();
        dataAccess.Fileinit();
        newsList = dataAccess.getData();
        newsList.sort(new News.TimeComparator());
    }

    public List<News> getNews(String keywords,int isContinue) { //TODO: complete the reponse algorithm
        List<String> patterns = new ArrayList<>(Arrays.asList(keywords.split(" ")));
        int thisEpoll = isContinue;

        if (thisEpoll == 0) {
            epoll = 0;
            indexStack.clear();
            answerArray.clear();
            pointer = 0;
            buffer.clear();
        } else {
            if (thisEpoll < epoll) {
                epoll--;
                if (indexStack.size() != 0)
                    pointer = indexStack.pop();
                answerArray.remove(answerArray.size()-1);
                return answerArray.get(epoll);
            } else {
                epoll++;
                pointer = indexStack.peek();
            }
        }
        for (int i = pointer; i < newsList.size(); i++) {  //进行这一轮的处理,得到需返回的新闻数组
            News temp = newsList.get(i);
            temp.match(patterns);
            boolean titleHasMatch = false;
            boolean contentHashMatch = true;

            for (int j = 0; j < temp.titleCount.size(); j++) {
                if (temp.titleCount.get(j) != 0) {
                    titleHasMatch = true;
                }
            }

            for (int j = 0; j < temp.contentCount.size(); j++) {
                if (temp.contentCount.get(j) == 0) {
                    contentHashMatch = false;
                }
            }

            if (titleHasMatch && contentHashMatch) buffer.add(temp);
            if (buffer.size() == ((epoll+1)*40 + 10)) {
                indexStack.push(i+1);
                break;
            }
            if (i == newsList.size()-1) indexStack.push(i+1);
        }
        System.out.println(pointer);
        ArrayList<News> answer = new ArrayList<>();
        if (newsList.size() < 10) return newsList;
        if (buffer.size() < 10) {
            for (int i = 0; i < buffer.size(); i++) {
                answer.add(buffer.peek());
            }
            answerArray.add(answer);
            return answer;
        }
        if (buffer.size() == 0) {
            for (int i = 0; i < 10; i++) {
                answer.add(newsList.get(i));
            }
            answerArray.add(answer);
            return answer;
        }
        for (int i = 0 ; i < 10 ; i++) {
            News temp = buffer.peek();
            answer.add(temp);
            buffer.remove();
        }
        answerArray.add(answer);
        return answer;
    }

}
