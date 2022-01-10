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
            axios.get('http://localhost:8080/getnews/1/0').then((res) => {
                props.changePage(1)
                props.changeKeywords(search)
                props.changeNews(res.data)
            })
        }
    }

    const pickup = (string, keywords) => {
        return string;
    }

    const formatTime = (time) => {
        return '' + time.year + '.' + time.month + '.' + time.day + ' ' + time.hour + ':' + time.minute + ':' + time.second;
    }

    let newsList = props.news.map((data,index) => {
        return (
            <div className={"NewsBox"} key={index} onClick={handleBoxClick(index)}>
                <a>{data.url}</a>
                <div className={"Title"}>{data.title}</div>
                <div className={"PickUp"}>{pickup(data.content,props.keywords)}</div>
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
            <img src={"src/static/arrow-double-left.png"} className={"ArrowLeft"}/>
            <img src={"src/static/arrow-double-right.png"} className={"ArrowRight"}/>
        </div>
    )
}

export default Res;