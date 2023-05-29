import React from "react";
import "./IconHorazionStyle.css";

function IconHorazion(props){
    return(
        <div className="icon-string-horazion">
            <span className={`${props.classN}` + " material-symbols-outlined"}>
                {props.icon}
            </span>
            &nbsp;
            <span className={props.CtntStyle}> {props.content} </span>
        </div>
    );
}

export default IconHorazion;