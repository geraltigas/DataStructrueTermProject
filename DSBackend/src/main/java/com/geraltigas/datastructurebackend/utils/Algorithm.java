package com.geraltigas.datastructurebackend.utils;


import java.util.ArrayList;
import java.util.List;

public class Algorithm {


    public static List<Integer> match(List<String> keywords,String text) {
        ArrayList<Integer> answer = new ArrayList<>();
        for (String keyword : keywords) {
            answer.add(metaMatch(keyword,text));
        }
        return answer;
    }


    static int metaMatch(String keyword, String text) {
        int answer = 0;
        int[] nextval = KMPnextval(keyword);
        int patternPointer = 0;
        for (int i = 0 ; i < text.length(); i++) {
            if (keyword.charAt(patternPointer) == text.charAt(i)) {
                patternPointer++;
                if (patternPointer == keyword.length()) {
                    patternPointer = 0;
                    answer++;
                }
            }else {
                patternPointer = nextval[patternPointer] + 1;
            }
        }
        return answer;
    }

    static int[] KMPnextval(String pattern) {
        int[] answer = new int[pattern.length()];

        if (pattern.length() == 1) {
            answer[0] = -1;
            return answer;
        }

        if (pattern.length() == 2) {
            answer[0] = -1;
            answer[1] = 0;
            return answer;
        }

        answer[0] = -1;
        answer[1] = 0;
        for (int i = 1; i < pattern.length()-1; i++) { // 确定字符串
            int maxLength = 0;
            for (int j = 0; j <= i-1; j++) {  // 确定字串的长度
                int tailHead = i-j;
                boolean isOK = true;
                for (int k = 0; k <= j; k++) {
                    if (pattern.charAt(k) != pattern.charAt(tailHead+k)) {
                        isOK = false;
                        break;
                    }
                }
                if (!isOK) continue;
                else {
                    maxLength = j+1;
                }
            }
            answer[i+1] = maxLength;
        }
        for (int i = 1; i < pattern.length() ; i++)
            if (pattern.charAt(answer[i]) == pattern.charAt(i))
                answer[i] = answer[answer[i]];
        return answer;
    }
}
