import React from "react";


import "./SidebarStyle.css";

function Sidebar({width, height, color, position, content, fix}){
    return (
        <div style={{width: width, height: height}} className={color+" "+position+" "+fix+" sidebar-basic-style"} >
                {content}
        </div>
    );
}

export default Sidebar;