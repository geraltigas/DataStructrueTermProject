# -*- codeing = utf-8 -*-
# -*- codeing = utf-8 -*-
import urllib.request
import bs4
import re
import json
import jsonpath
import requests
from json import JSONEncoder
from bs4 import BeautifulSoup
head = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.35 (KHTML, like Gecko) Chrome/96.0.4664.53 Safari/537.36 Edg/96.0.1054.34","authority": "www.cqcb.com",'Referer': 'https://www.cqcb.com/toutiaotuijian/'}
reg_body = re.compile("(?<=>)[\s\S]+(?=<)")
class Time:

    def __init__(self,year,month,day,hour,minute,second):
            self.year = year
            self.month = month
            self.day = day
            self.hour = hour
            self.minute = minute
            self.second = second






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

newsArray = []

for year in range(2017,2022):
        for month in range(1,13):
                if (month < 10):
                        month1 = "0%s" % month
                else:
                        month1="%s"%month
                if(month==2):
                        count=29
                else:
                        count=31
                for day in range(1,count):
                      try:
                                if (day < 10):
                                        day1 = "0%s" % day
                                else:
                                        day1 = "%s" % day
                                year1=str(year)
                                date=year1+month1+day1
                                url1="http://www.people.com.cn/GB/59476/review/%s.html"%date
                                request = requests.get(url1, headers=head)
                                norm3=re.compile('charset=([GB2312|utf])')
                                request1=str(request.content)
                                type=re.findall(norm3,request1)
                                if(type[0]=="G"):
                                        response = request.content.decode('GBK')
                                else:
                                        response = request.content.decode('utf-8')
                                normforindex = re.compile('<a href="(http://[a-z]*.people.com.cn/n1/[0-9][0-9][0-9][0-9]/[0-9][0-9][0-9][0-9]/c[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9].html)')
                                textindex = re.findall(normforindex, response)
                                print(date)
                                for index in textindex:
                                        content=""
                                        url = "%s"%index
                                        request = requests.get(url, headers=head)
                                        response = request.content.decode('GBK')
                                        norm = re.compile('\\t(.*)</p>')
                                        norm1=re.compile('<title>(.*)</title>')
                                        norm2=re.compile('([0-9][0-9][0-9][0-9].[0-9][0-9].[0-9][0-9].[0-9][0-9]:[0-9][0-9])')
                                        text = re.findall(norm, response)
                                        text1=re.findall(norm1,response)
                                        text2 = re.findall(norm2, response)
                                        if(text1[0]=="404 Not Found"):
                                                continue
                                        if(text1[0]=="403 Forbidden"):
                                                continue
                                        soup = BeautifulSoup(response,"html.parser")
                                        for i in soup.find_all("div", attrs={"class": "rm_txt_con"}):
                                            content = reg_body.findall(str(i))[0]
                                        dauu=text2[0]
                                        year=dauu[0]+dauu[1]+dauu[2]+dauu[3]
                                        month=dauu[5]+dauu[6]
                                        day=dauu[8]+dauu[9]
                                        hour=dauu[11]+dauu[12]
                                        minute=dauu[14]+dauu[15]
                                        second= 0
                                        title=text1[0]
                                        source="人民网"
                                        url = "%s" % index
                                        time = Time(year,month,day,hour,minute,second)
                                        newsArray.append(Data(title, source, time, content, url))
                      except:
                                print(" ")
file = open("data.txt", encoding="utf-8", mode="a+")
file.write(json.dumps(newsArray, cls=Myencoder))