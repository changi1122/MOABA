import React from "react";
import { Link } from "react-router-dom";

import PageButton from "./PageButton";

import "./MenuShowStyle.css";

function MenuShow(){

    function CloseSideBar(){
        var ctnt = document.getElementById("sidebar-sub").className;
        var siblingElement = document.getElementById('sidebar-sub').previousElementSibling;

        ChageClassName(ctnt, ctnt.match("Temp")?"Temp" : "Save", siblingElement);
    }

    function ChageClassName(subStr, content, siblingElement){
        subStr = subStr.replace(" sidebar-menu-sub-show", "");
        subStr = subStr.replace(" "+content, "");
        document.getElementById("sidebar-sub").className = subStr;

        var sibling = siblingElement.className;
        sibling = sibling.replace("sidebar-non-radius-style", "");
        siblingElement.className = sibling;
    }


    return(
        <div className="sidebar-menu">

            <Link to="/home" onClick={CloseSideBar}>모아봐</Link>

            <PageButton/>
        </div>
    );
}

export default MenuShow;