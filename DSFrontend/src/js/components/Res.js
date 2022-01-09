import React from "react";

const Res = (props) => {

    const pickup = (string, keywords) => {
        return string;
    }

    const formatTime = (time) => {
        return '' + time.year + '.' + time.month + '.' + time.day + ' ' + time.hour + ':' + time.minute + ':' + time.second;
    }

    let newsList = props.news.map((data,index) => {
        return (
            <div className={"NewsBox"} key={index}>
                <a>{data.url}</a>
                <div className={"Title"}>{data.title}</div>
                <div className={"PickUp"}>{pickup(data.content,props.keywords)}</div>
                <div className={"Time"}>{formatTime(data.time)}</div>
            </div>
        )
    })

    return (
        <div className={"Response"}>
            <div className="SearchBarR hover:bg-sky-700">
                <input type={"text"} className={"SearchInputR"} maxLength={37}/>
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