import React from "react";

function ButtonBoard(props) {
    const mapping = [
        "delete","clean","(",")","^","^2","√","÷","7","8","9","×","4","5","6","-","1","2","3","+","0",
        ".","="
    ]
    const Add = props.functionUpdate;
    const Delete = props.functionDeleteC;
    const Clean = props.functionClean;
    const buttonList = mapping.map((item,index) => {
        let returnR = mapping[index];
        if (returnR === "^" || returnR === "^2" || returnR === "√" || returnR=== "÷" || returnR === "×" || returnR === "-" || returnR === "+" || returnR === "(" || returnR===")") {
            return <div onClick={() => {Add(returnR)}
            } className={"_"+ returnR + " button_symbol mdui-hoverable buttons mdui-ripple mdui-ripple-grey-500"} key={index}>{returnR}</div>
        }else if (returnR === "="){
            return <div onClick={() => {}} className={"_"+ returnR + " button_equal mdui-hoverable buttons mdui-ripple mdui-ripple-blue-500"} key={index}>{returnR}</div>
        }else if(returnR === "delete" || returnR === "clean"){
            return <div onClick={returnR === "delete" ? Delete : Clean} className={"_"+ returnR + " buttons mdui-color-red-100 mdui-hoverable mdui-ripple mdui-ripple-grey-500"} key={index}>{returnR}</div>
        }else{
            return (
                <div onClick={() => {Add(returnR)}} className={"_"+ returnR + " mdui-hoverable buttons mdui-ripple mdui-ripple-grey-500"} key={index}>{returnR}</div>
            )
        }
    })
    return (
        <div className={"ButtonBoard"}>
            {buttonList}
        </div>
    )
}

export default ButtonBoard;
