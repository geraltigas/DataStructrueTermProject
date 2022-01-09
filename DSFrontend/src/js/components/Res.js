import React from "react";

const Res = (props) => {

    const pickup = (string, keywords) => {
        return string;
    }

    const formatTime = (time) => {
        return '' + time.year + '.' + time.month + '.' + time.day + ' ' + time.hour + ':' + time.minute + ':' + time.second;
    }

    const news = [
        {
            content: 'this is news 1',
            title: 'title 1',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example1.com",
            source: "JB"
        },
        {
            content: 'this is news 2',
            title: 'title 2',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example2.com",
            source: "JB2"
        },
        {
            content: 'this is news 3',
            title: 'title 3',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example3.com",
            source: "JB"
        },
        {
            content: 'this is news 4',
            title: 'title 4',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example4.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
        {
            content: 'this is news 5',
            title: 'title 5',
            time: {
                year: 2020,
                month: 12,
                day: 31,
                hour: 23,
                minute: 59,
                second: 59
            },
            url: "www.example5.com",
            source: "JB"
        },
    ]

    let newsList = news.map((data,index) => {
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