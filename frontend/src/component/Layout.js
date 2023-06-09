import React from "react";
import Footer from "../component/Footer.js";

import "./LayoutStyle.css";


function Layout({header, body, align_items, T_styel, color}){
    return(
        <div className={align_items}>
            <p className={`${T_styel} ${color}`}>{header}</p>
            {body}
            <div className="None">
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;