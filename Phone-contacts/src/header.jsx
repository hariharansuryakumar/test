import React from "react";
import"./header.css"

function header(props) {
    return (
        <div className="header" >
            {props.headerName}
        </div>
    )
}