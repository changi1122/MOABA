import React from "react";
import "./IconHorazionStyle.css";

function IconHorazion(props){
    return(
        <div className="icon-string-horazion">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

            <span className={`${props.classN}` + " material-symbols-outlined"}>
                {props.icon}
            </span>
            &nbsp;
            <span className={props.CtntStyle}> {props.content} </span>
        </div>
    );
}

export default IconHorazion;