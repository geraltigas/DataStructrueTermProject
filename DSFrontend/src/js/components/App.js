import React from "react";
import Search from "./Search"
import Res from "./Res"
import Show from "./Show"
import Web from "./Web"

const App = (props) => {

    const [pageIndex, setPageIndex] = React.useState(0)

    const [keywords,setKeywords] = React.useState("")

    const [response,setResponse] = React.useState({})
    
    const [news,setNews] = React.useState([
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
            url: "bilibili.com",
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
    ])


    const [index,setIndex] = React.useState(0);

    //Router
    let page;
    switch (pageIndex){
        case 0:
            page = (<Search> </Search>)
            break;
        case 1:
            page = (<Res news={news}> </Res>)
            break;
        case 2:
            page = (<Show news={news} index={index}> </Show>)
            break;
        case 3:
            page = (<Web news={news} index={index}> </Web>)
            break;
    }

    return (
        <div>
            {page}
        </div>
    )
}

export default App