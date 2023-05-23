import React from "react";
import { Link } from "react-router-dom";

import PageButton from "./PageButton";

import "./MenuShowStyle.css";
import image1 from "../../images/temp.png"

function MenuShow(){

    return(
        <div className="sidebar-menu">

            <Link to="/home">모아봐</Link>

            <PageButton/>

            <img src={image1} alt="" />

        </div>
    );
}

export default MenuShow;