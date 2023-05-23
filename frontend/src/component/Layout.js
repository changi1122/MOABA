import React from "react";

import "./LayoutStyle.css";


function Layout({header, body, align_items, T_styel, color}){
    return(
        <div className={align_items}>
            <p className={`${T_styel} ${color}`}>{header}</p>
            {body}
        </div>
    );
}

export default Layout;