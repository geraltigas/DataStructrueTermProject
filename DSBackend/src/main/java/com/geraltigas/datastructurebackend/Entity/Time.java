package com.geraltigas.datastructurebackend.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class Time implements Comparable<Time>{
    public int year;
    public int month;
    public int day;
    public int hour;
    public int minute;
    public int second;

    @Override
    public int compareTo(Time o) {
        if (year > o.year) return 1;
        else if (year < o.year) return -1;
        else {
            if (month > o.year) return 1;
            else if ( month < o.month) return -1;
            else {
                if (day > o.day) return 1;
                else if (day < o.day) return -1;
                else {
                    if (hour > o.hour) return 1;
                    else if (hour < o.hour) return -1;
                    else {
                        if (minute > o.minute) return 1;
                        else if (minute < o.minute) return -1;
                        else {
                            if (second > o.second) return 1;
                            else if (second < o.second) return -1;
                            else return 0;
                        }
                    }
                }
            }
        }
    }
}
