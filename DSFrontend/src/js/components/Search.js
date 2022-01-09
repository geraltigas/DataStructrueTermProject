import React from "react";

const Search = () => {

    return (
        <div className={"Search"}>
            <div className={"Logo"}>
                <div style={{color: "#5087f4"}}>N</div>
                <div style={{color: "#4ba854"}}>e</div>
                <div style={{color: "#df412f"}}>w</div>
                <div style={{color: "#f5bb00"}}>s</div>
                <div style={{color: "#5087f4"}}>S</div>
                <div style={{color: "#df412f"}}>e</div>
                <div style={{color: "#f5bb00"}}>a</div>
                <div style={{color: "#5087f4"}}>r</div>
                <div style={{color: "#4ba854"}}>c</div>
                <div style={{color: "#5087f4"}}>h</div>
            </div>
            <div className="SearchBar mdui-ripple-gray">
                <input type={"text"} className={"SearchInput"} maxLength={37}></input>
                <div className={"SearchImg"}><img draggable={false} src={"src/static/search.png"}/></div>
            </div>
            <div className={"SearchButton"}> </div>
            <div className={"getRandom"}> </div>
        </div>
    )
}

export default Search;