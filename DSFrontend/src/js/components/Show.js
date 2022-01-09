import React from "react";

const Show = (props) => {

    let newO = props.news[props.index];

    const [size,setSize] = React.useState(0);

    const fontSize = (size) => {
        if (size == 0) {
            return '20px'
        }else if (size == 1) {
            return '30px'
        }else {
            return '40px'
        }
    }

    const handleClick = (size) => {
        return () => {
            setSize(size);
        }
    }

    const formatInfo = (newO) => {
        return '' + newO.time.year + '年' + newO.time.month + '月' + newO.time.day + '日'  + newO.time.hour + ':' + newO.time.minute + ':' + newO.time.second + ':' + '|来源: ' + newO.source;
    }

    return (
        <div>
            <div className={"Article"}>
                <div className={"TitleShow"}>{newO.title}</div>
                <div className={"InfoShow"}>{formatInfo(newO)}</div>
                <div className={"Buttons"}>
                    字体
                    <button onClick={handleClick(2)}>大</button>
                    <button onClick={handleClick(1)}>中</button>
                    <button onClick={handleClick(0)}>小</button>
                </div>
                <div className={"LineShow"}> </div>
                <div className={"ConShow"} style={{fontSize: fontSize(size)}}>{newO.content}</div>
            </div>

            <img className={"ArrowLeft"} src={"src/static/arrow-double-left.png"}/>
            <img className={"ArrowRight"} src={"src/static/arrow-double-right.png"}/>
        </div>
    )
}

export default Show;