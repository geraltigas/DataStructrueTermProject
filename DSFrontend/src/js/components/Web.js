import React from "react";

const Web = (props) => {

    let newO = props.news[props.index]

    const handleBack = () => {
        props.changePage(1)
    }

    return (
        <div>
            <iframe src={'https://' + newO.url + '/'} title={"hello"} className={"WebView"}> </iframe>
            <button className={"ButtonBack"}><img src={"src/static/exit.png"} onClick={handleBack}/></button>
        </div>
    )
}

export default Web;