# -*- codeing = utf-8 -*-
# -*- coding:utf-8 -*-
import json

import requests
from bs4 import BeautifulSoup
import re

from json import JSONEncoder

reg_body = re.compile("(?<=>)[\s\S]+(?=<)")
reg_source = re.compile("(?<=来源：)[\s\S]+?(?=<)")
reg_time = re.compile("20[0-9]{2}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}")
reg_exit = re.compile("此文章已下线")

newsArray = []

class Time:

    def __init__(self, stringArray):
        if len(stringArray) == 0:
            self.year = "0000"
            self.month = "00"
            self.day = "00"
            self.hour = "00"
            self.minute = "00"
            self.second = "00"
            return
        else:
            string = stringArray[0]
            self.year = string[0:4]
            self.month = string[5:7]
            self.day =  string[8:10]
            self.hour = string[11:13]
            self.minute = string[14:16]
            self.second = "00"
            return




class Data:

    def __init__(self, title, source, time, content, url):
        self.title = title
        self.content = content
        self.time = time
        self.url = url
        self.source = source

    def __int__(self):
        return


class Myencoder(JSONEncoder):

    def default(self, obj):
        return obj.__dict__


my_header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.35 (KHTML, like Gecko) Chrome/96.0.4664.53 Safari/537.36 Edg/96.0.1054.34",
    'Connection': 'close'
}

indexBegin = 16190996
urlBase = "http://www.thepaper.cn/newsDetail_forward_"

for i in range(indexBegin, indexBegin - 3000, -1):
    url = urlBase + str(i)
    reponse = requests.get(url, headers=my_header, timeout=1000, verify=False)
    if (reponse.status_code == 200):
        soup = BeautifulSoup(reponse.text)
        if len(reg_exit.findall(reponse.text))  != 0 : continue
        print(i)
        for m in soup.find_all("div", attrs={'data-size': 'standard'}):
            content = reg_body.findall(str(m))[0]
        for m in soup.find_all("h1", attrs={'class': 'news_title'}):
            title = reg_body.findall(str(m))[0]
        for m in soup.find_all("div", attrs={"class": "news_about"}):
            string = reg_source.findall(str(m))
            if len(string) == 1:
                source = reg_source.findall(str(m))[0]
            else:
                source = ""
        time = Time(reg_time.findall(reponse.text))
        newsArray.append(Data(title,source,time,content,url))

file = open("./data.txt",encoding="utf-8",mode="w")
file.write(json.dumps(newsArray,cls=Myencoder))

