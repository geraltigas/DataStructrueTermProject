import React, {useEffect} from "react";

const Web = (props) => {


    let newO = props.news[props.index]
    console.log(newO)
    const handleBack = () => {
        props.changePage(1)
    }

    useEffect(() => {
        console.log("in it")
        console.log(newO)
    },[])

    return (
        <div>
            <iframe src={newO.url} title={"hello"} className={"WebView"}> </iframe>
            <button className={"ButtonBack"}><img src={"src/static/exit.png"} onClick={handleBack}/></button>
        </div>
    )
}

export default Web;