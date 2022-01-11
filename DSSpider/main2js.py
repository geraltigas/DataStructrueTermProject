# -*- codeing = utf-8 -*-
# -*- codeing = utf-8 -*-
import urllib.request
from json import JSONEncoder

import bs4
import re
import json
import jsonpath
import requests

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

head = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.35 (KHTML, like Gecko) Chrome/96.0.4664.53 Safari/537.36 Edg/96.0.1054.34","authority": "www.cqcb.com",'Referer': 'https://www.cqcb.com/toutiaotuijian/'}
for iidex in range(1,294):
	urlindex="http://www.tophr.net/news/newslist.asp?id=23&page=%s"%iidex
	request = requests.get(urlindex, headers=head)
	response = request.content.decode('GBK')
	normforindex=re.compile('<li class="newslist_list"><a href="../news/index.asp\?id=([0-9]*)"')
	textindex=re.findall(normforindex,response)
	for i in range(0,len(textindex)):
		try:
			content=""
			url1=("http://www.tophr.net/news/index.asp?id=%s"%textindex[i])
			request = requests.get(url1, headers=head)
			response1 = request.content.decode('GBK')
			norm = re.compile('<title>(.*)</title>')
			text2 = re.findall(norm, response1)
			norm1=re.compile('(<p.*</p>)')
			text = re.findall(norm1, response1)
			normfortime = re.compile('<font class="ash-color">([0-9][0-9][0-9][0-9]-[0-9][0-9]?-[0-9][0-9]?)</font>')
			texttime = re.findall(normfortime, response1)
			file1 = open("第一资源.html", "a+")
			if (text2[0] == "404 Not Found"):
				continue
			if (text2[0] == "403 Forbidden"):
				continue
			file1.write("<p>%s</p>" % text2[0])
			file1.write('\n')
			title=text2[0]
			dateu = str(texttime[0])
			year=dateu[0]+dateu[1]+dateu[2]+dateu[3]
			month=dateu[5]+dateu[6]
			month=month.replace("-","")
			day=dateu[len(dateu)-2]+dateu[len(dateu)-1]
			day=day.replace("-","")
			hour=0
			minute=0
			second=0
			title=text2[0]
			url=url1
			source="第一资源网"
			file1.write("<p>%s</p>" % dateu)
			file1.write('\n')
			file1.write("<p>%s</p>" % url1)
			file1.write('\n')
			for j in range(0, len(text)):
				content=content+text[j]
				file1.write("%s" % text[j])
				file1.write('\n')

			time = Time(year, month, day, hour, minute, second)
			newsArray.append(Data(title, source, time, content, url))
		except:
			print("")
file = open("data.txt", encoding="utf-8", mode="a+")
file.write(json.dumps(newsArray, cls=Myencoder))