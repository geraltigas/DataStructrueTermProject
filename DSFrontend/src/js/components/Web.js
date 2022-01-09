import React from "react";

const Web = (props) => {

    let newO = props.news[props.index]

    return (
        <div>
            <iframe src={'https://' + newO.url + '/'} title={"hello"} className={"WebView"}> </iframe>
            <button className={"ButtonBack"}><img src={"src/static/exit.png"}/></button>
        </div>
    )
}

export default Web;