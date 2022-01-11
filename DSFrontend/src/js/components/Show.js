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

    const changeNewsIndex = (delta) => {
        return (e) => {
            console.log('this is news index')
            if ((props.index + delta) < props.news.length && (props.index + delta >= 0)) {
                props.changeIndex(props.index+delta)
            }
        }
    }

    const handleClick = (size) => {
        return () => {
            setSize(size);
        }
    }

    const handleBack = () => {
        props.changePage(1)
    }

    const formatTime = (time) => {
        return '' + time.year + '.' + time.month + '.' + time.day + ' ' + (time.hour < 10 ?('0' + time.hour ) : time.hour)  + ':' +  (time.minute < 10 ? (time.minute +  '0') : time.minute) + ':' + (time.second < 10 ? (time.second +  '0') : time.second) ;
    }

    return (
        <div>
            <div className={"Article"}>
                <div className={"TitleShow"}>{newO.title}</div>
                <div className={"InfoShow"}>{formatTime(newO.time)}</div>
                <div className={"Buttons"}>
                    字体
                    <button onClick={handleClick(2)}>大</button>
                    <button onClick={handleClick(1)}>中</button>
                    <button onClick={handleClick(0)}>小</button>
                </div>
                <div className={"LineShow"}> </div>
                <div className={"ConShow"} dangerouslySetInnerHTML={{__html: newO.content}} style={{fontSize: fontSize(size)}}></div>
            </div>

            <img className={"ArrowLeft"} src={"src/static/arrow-double-left.png"} onClick={changeNewsIndex(-1)}/>
            <img className={"ArrowRight"} src={"src/static/arrow-double-right.png"} onClick={changeNewsIndex(1)}/>
            <button className={"ButtonBack"} onClick={handleBack}><img src={"src/static/exit.png"}/></button>
        </div>
    )
}

export default Show;