import React from "react";
import Display from "./Display";
import Screen from "./Screen";
import ButtonBoard from "./ButtonBoard";

function Calculator(props) {
    const [nowFormula, setNowFormula] = React.useState("");
    const [history, setHistory] = React.useState([]);

    const Add = (delta) => {
        setNowFormula(nowFormula+delta);
    }

    const Update = () => {
        console.log("to be continued...");
    }

    const clean = () => {
        setNowFormula("");
    }

    const deleteC = () => {
        setNowFormula(nowFormula.substr(0,nowFormula.length-1))
    }

    return (
        <div className={"Calculator"}>
            <Screen nowFormula={nowFormula}> </Screen>
            <Display history={history}> </Display>
            <ButtonBoard  functionClean={clean} functionDeleteC={deleteC} functionUpdate={Add} functionAdd={() => {}}> </ButtonBoard>
        </div>
    )

}

export default Calculator;