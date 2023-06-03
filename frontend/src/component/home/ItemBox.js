import React from "react";

import IconHorazion from "../IconHorazion";

import "./ItemBoxStyle.css";

function ItemBox(props){

    //console.log("sd" + props.img);


    return(
        <div className="Rcmnd-box">
            <img src={props.img} alt="" />
            <p className="Rcmnd-box-title-style">{props.title} <span>by {props.user}</span></p>

            <IconHorazion
                classN = ""
                icon = "calendar_month"
                CtntStyle =""
                content = {props.date}
            />

            <span id="Rcmnd-category"># {props.category1}</span>
            <span id="Rcmnd-category"># {props.category2}</span>
            <span id="Rcmnd-category"># {props.category3}</span>
        </div>
    );
}

export default ItemBox;