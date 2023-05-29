import React from "react";
import { Link } from "react-router-dom";

import PageButton from "./PageButton";

import "./MenuShowStyle.css";

function MenuShow(){

    return(
        <div className="sidebar-menu">

            <Link to="/home">모아봐</Link>

            <PageButton/>
        </div>
    );
}

export default MenuShow;