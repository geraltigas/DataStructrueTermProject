import requests
import re

head = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.35 (KHTML, like Gecko) Chrome/96.0.4664.53 Safari/537.36 Edg/96.0.1054.34","Host": "top.news.sina.com.cn",'Upgrade-Insecure-Requests': '1'}
head1 = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.53","Host": "top.news.sina.com.cn",'upgrade-insecure-requests': '1',"sec-ch-ua-mobile": "?0",'sec-fetch-user': '?1','cookie': 'page=23333; post=massage; name=sinaAds;'}
# url = "http://www.kxdaili.com/dailiip/1/1.html"
# request = requests.get(url, headers=head)
# response = request.content
# html = response
#bs = BeautifulSoup(html, "html.parser")
#t_list = bs.find_all()
#t_list = str(t_list)
for year in range(2020,2023):
        for mouth in range(1,13):
                if (mouth < 10):
                        mouth1 = "0%s" % mouth
                else:
                        mouth1="%s"%mouth
                if(mouth==2):
                        count=29
                else:
                        count=31
                for day in range(1,count):
                                if (day < 10):
                                        day1 = "0%s" % day
                                else:
                                        day1 = "%s" % day
                                year1=str(year)
                                date=year1+mouth1+day1
                                url1="http://top.news.sina.com.cn/ws/GetTopDataList.php?top_type=day&top_cat=www_www_all_suda_suda&top_time=%s&top_show_num=100"%date
                                request = requests.get(url1, headers=head)
                                response = request.content
                                response=str(response)
                                normfordate = re.compile('"create_date":"([0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9])"')
                                normfortime = re.compile('"create_time":"([0-9][0-9]:[0-9][0-9]:[0-9][0-9])"')
                                normforindex = re.compile('"url":"(https:[^_]*shtml)",')
                                textdate = re.findall(normfordate, response)
                                texttime = re.findall(normfortime, response)
                                textindex = re.findall(normforindex, response)
                                for k in range(0,len(textindex)):
                                        textindex[k]=textindex[k].replace("\\","")
                                        url = "%s"%textindex[k]
                                        request = requests.get(url, headers=head1)
                                        response = request.content.decode('utf-8')
                                        norm1 = re.compile('(<p.*)</p>')
                                        text = re.findall(norm1, response)
                                        print(response)
                                        norm = re.compile('<title>(.*)</title>')
                                        text2 = re.findall(norm, response)
                                        file1=open("新浪网.text","a+")
                                        if(text2[0]=="404 Not Found"):
                                                continue
                                        if(text2[0]=="403 Forbidden"):
                                                continue
                                        file1.write("%s"%text2[0])
                                        print(text2[0])
                                        file1.write('\n')
                                        dateu=textdate[k]+texttime[k]
                                        file1.write("%s" % dateu)
                                        file1.write('\n')
                                        file1.write("%s" % url)
                                        file1.write('\n')
                                        for j in range(1,len(text)-1):
                                                file1.write("%s,</p>" % text[j])
                                                file1.write('\n')

