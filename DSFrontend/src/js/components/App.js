import React from "react";
import Search from "./Search"
import Res from "./Res"
import Show from "./Show"

const App = (props) => {

    const [pageIndex, setPageIndex] = React.useState(2)

    const [keywords,setKeywords] = React.useState("")

    const [response,setResponse] = React.useState({})
    
    const [news,setNews] = React.useState({})
    
    const [url,setUrl] = React.useState("")

    //Router
    let page;
    switch (pageIndex){
        case 0:
            page = (<Search> </Search>)
            break;
        case 1:
            page = (<Res> </Res>)
            break;
        case 2:
            page = (<Show > </Show>)
            break;
    }

    return (
        <div>
            {page}
        </div>
    )
}

export default App