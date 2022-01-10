import React from "react";
import Search from "./Search"
import Res from "./Res"
import Show from "./Show"
import Web from "./Web"

const App = (props) => {

    const [pageIndex, setPageIndex] = React.useState(0)

    const [keywords,setKeywords] = React.useState("")

    // const [response,setResponse] = React.useState({})
    
    const [news,setNews] = React.useState([])

    const [index,setIndex] = React.useState(0);

    //Router
    let page;
    switch (pageIndex){
        case 0:
            page = (<Search changePage={setPageIndex} changeKeywords={setKeywords} changeNews={setNews}> </Search>)
            break;
        case 1:
            page = (<Res changePage={setPageIndex} changeIndex={setIndex} news={news} keywords={keywords} changeNews={setNews}> </Res>)
            break;
        case 2:
            page = (<Show changePage={setPageIndex} news={news} index={index} changeIndex={setIndex}> </Show>)
            break;
        case 3:
            page = (<Web changePage={setPageIndex} news={news} index={index}> </Web>)
            break;
    }

    return (
        <div>
            {page}
        </div>
    )
}

export default App