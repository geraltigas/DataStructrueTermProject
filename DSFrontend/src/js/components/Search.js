import React from "react";
import axios from "axios";

const Search = (props) => {

    let search;

    const handleChange = (e) => {
        search = e.target.value;
    }

    const handleKeyDown =  (e) => {
        if (e.code === 'Enter') {
            let isInput = false;
            for (let i = 0; i < search.length; i++) {
                if (search[i] === '\'') isInput = true;
            }
            if (isInput) {
                return
            }
            axios.get('http://localhost:8080/getnews/1/0').then((res) => {
                props.changePage(1)
                props.changeKeywords(search)
                console.log(search)
                props.changeNews(res.data)
            })
        }
    }

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
                <input type={"text"} className={"SearchInput"} maxLength={37} onKeyDown={handleKeyDown} onChange={handleChange}></input>
                <div className={"SearchImg"}><img draggable={false} src={"src/static/search.png"}/></div>
            </div>
            <div className={"SearchButton"}> </div>
            <div className={"getRandom"}> </div>
        </div>
    )
}

export default Search;