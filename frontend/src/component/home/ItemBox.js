import React from "react";

import IconHorazion from "../IconHorazion";

import "./ItemBoxStyle.css";

function ItemBox(props){

    return(
        <div className="Rcmnd-box">
            <p>#{props.category1} #{props.category2} #{props.category3}</p>
            <img src={props.img} alt="" />
            <p className="Rcmnd-box-Title">Title</p>
            <p className="Rcmnd-box-title-style">{props.title}</p>

            <IconHorazion
                classN = ""
                icon = "calendar_month"
                CtntStyle =""
                content = {props.date}
            />

            <IconHorazion
                classN=""
                icon="schedule"
                CtntStyle=""
                content = {props.time}
            />

        </div>
    );
}

export default ItemBox;