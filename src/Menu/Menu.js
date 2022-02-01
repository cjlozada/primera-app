import React from "react";
import Search from "../Search/Search";

function Menu(props){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>

                <div className="search">
                    <Search />
                </div>

                <div className="actions">
                    <button className="button btn-blue">+ Añadir nuevo libro</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;