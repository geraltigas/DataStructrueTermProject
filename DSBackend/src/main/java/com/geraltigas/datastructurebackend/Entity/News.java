package com.geraltigas.datastructurebackend.Entity;


import com.geraltigas.datastructurebackend.utils.Algorithm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Comparator;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class News {
    public String content;
    public String title;
    public Time time;
    public String url;
    public String source;

    public List<Integer> titleCount;
    public List<Integer> contentCount;

    public double titleCountWeight;
    public double contentCountWeight;

    static public class TimeComparator implements Comparator<News> {
        @Override
        public int compare(News o1, News o2) {
            if (o1.time.year > o2.time.year) return -1;
            else if (o1.time.year < o2.time.year) return 1;
            else {
                if (o1.time.month > o2.time.month) return -1;
                else if ( o1.time.month < o2.time.month) return 1;
                else {
                    if (o1.time.day > o2.time.day) return -1;
                    else if (o1.time.day < o2.time.day) return 1;
                    else {
                        if (o1.time.hour > o2.time.hour) return -1;
                        else if (o1.time.hour < o2.time.hour) return 1;
                        else {
                            if (o1.time.minute > o2.time.minute) return -1;
                            else if (o1.time.minute < o2.time.minute) return 1;
                            else {
                                if (o1.time.second > o2.time.second) return -1;
                                else if (o1.time.second < o2.time.second) return 1;
                                else return 0;
                            }
                        }
                    }
                }
            }
        }
    }

    static public class PatternComparator implements Comparator<News> {

        @Override
        public int compare(News o1, News o2) {
            int titleBigger;
            int contentBigger;

            if (o1.titleCountWeight > o2.titleCountWeight) titleBigger = 1;
            else if (o1.titleCountWeight < o2.titleCountWeight) titleBigger = -1;
            else titleBigger = 0;

            if (o1.contentCountWeight > o2.contentCountWeight) contentBigger = 1;
            else if (o1.contentCountWeight < o2.contentCountWeight) contentBigger = -1;
            else contentBigger = 0;

            if (titleBigger == 1) return -1;
            else if (titleBigger == -1) return 1;
            else if (contentBigger == 1) return -1;
            else if (contentBigger == -1) return 1;
            else return 0;
        }
    }

    public void match(List<String> keywords) {
        titleCount = Algorithm.match(keywords,title);
        contentCount = Algorithm.match(keywords,content);
        titleCountWeight = 0;
        contentCountWeight = 0;
        int keywordsNum = titleCount.size();
        int weightSum = keywordsNum*(keywordsNum+1)/2;
        for (int i = 0; i < keywordsNum; i++) {
            titleCountWeight+=(double)(titleCount.get(i)*(keywordsNum-i)/weightSum);
            contentCountWeight+=(double) (contentCount.get(i)*(keywordsNum-i)/weightSum);
        }
    }

}
