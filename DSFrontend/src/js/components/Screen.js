import React from "react";

function Screen(props) {
    const clean = props.functionClean;
    const deleteC = props.functionDeleteC;
    return (
            <div className={"Screen"}>
                <div className={"screenText mdui-text-truncate"}>{props.nowFormula}</div>
            </div>
    )
}
export default Screen