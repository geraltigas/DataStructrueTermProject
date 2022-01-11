import React, {useEffect} from "react";
import axios from "axios";

const Res = (props) => {

    let search;

    const handleChange = (e) => {
        search = e.target.value;
    }

    const handleBoxClick = (index) => {
        return (e) => {
            props.changePage(2)
            props.changeIndex(index)
        }
    }

    const handleKeyDown =  (e) => {
        if (e.code === 'Enter') {
            let isInput = false;
            for (let i = 0; i < search.length; i++) {
                if (search[i] === '\'') isInput = true;
            }
            if (isInput) {
                return
            }
            axios.get('http://localhost:8080/getnews/' + search + '/0').then((res) => {
                props.changePage(1)
                props.changeKeywords(search)
                props.changeNews(res.data)
                console.log(res.data)
            })
        }
    }

    const pickup = (string, keywords) => {
        let array = keywords.split(' ')
        for (let i = 0; i < array.length; i++) {
            let matchArray = string.match(/(?<=[>。？]?)[\s\S]+?[<。？]?(?=[<])/g)
            console.log(matchArray)
            for (let j = 0; j < matchArray.length; j++) {
                let word = matchArray[j]
                if (word[0] !== '<') {
                }else if (word.indexOf('>') !== word.length-1) {
                    word = word.substring(word.indexOf('>')+1,word.length);
                }else {
                    continue
                }
                console.log(word)
                console.log(array[i])
                console.log(word.indexOf(array[i]))
                if (word.indexOf(array[i]) !== -1) {
                    return word
                }
            }
        }
        return ""
    }

    const formatTime = (time) => {
        if (time === undefined) return ""
        return '' + time.year + '.' + time.month + '.' + time.day + ' ' + (time.hour < 10 ?('0' + time.hour ) : time.hour)  + ':' +  (time.minute < 10 ? (time.minute +  '0') : time.minute) + ':' + (time.second < 10 ? (time.second +  '0') : time.second) ;
    }

    const handleUrlClick = (index) => {
        return () => {
            console.log("clicked")
            props.changeIndex(index)
            props.changePage(3)
        }
    }

    const handleNewsPageIndex = (delta) => {
        return () => {
            axios.get('http://localhost:8080/getnews/' + props.keywords + '/' + ((props.newsPageIndex + delta) < 0 ? 0 :props.newsPageIndex+delta)).then((res) => {
                props.changePage(1)
                props.changeNews(res.data)
                props.changeNewsPageIndex((props.newsPageIndex + delta) < 0 ? 0 :props.newsPageIndex+delta)
                console.log(res.data)
            })
        }
    }

    let newsList = props.news.map((data,index) => {
        if (data.content !== undefined)
            return (
            <div className={"NewsBox"} key={index}>
                <a>{data.url}</a>
                <div className={"Title"} onClick={handleUrlClick(index)}>{data.title}</div>
                <div className={"PickUp"} dangerouslySetInnerHTML={{__html: pickup(data.content,props.keywords)}} onClick={handleBoxClick(index)}></div>
                <div className={"Time"}>{formatTime(data.time)}</div>
            </div>
            )
    })

    useEffect(() => {
        document.getElementsByClassName('SearchInputR')[0].value = props.keywords
    })

    return (
        <div className={"Response"}>
            <div className="SearchBarR">
                <input type={"text"} className={"SearchInputR"} maxLength={37} onKeyDown={handleKeyDown} onChange={handleChange}/>
                <div className={"SearchImgR"}><img draggable={false} src={"src/static/search.png"}/></div>
            </div>
            <div className={"line"}> </div>
            <div className={"Content"}>
                {newsList}
            </div>
            <img src={"src/static/arrow-double-left.png"} className={"ArrowLeft"} onClick={handleNewsPageIndex(-1)}/>
            <img src={"src/static/arrow-double-right.png"} className={"ArrowRight"} onClick={handleNewsPageIndex(1)}/>
        </div>
    )
}

export default Res;