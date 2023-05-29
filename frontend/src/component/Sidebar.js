import React from "react";


import "./SidebarStyle.css";

function Sidebar({width, height, color, position, content, fix, isShow}){

    if(isShow=== undefined){
        isShow = 1
    }

    return (
        <>
            <div style={{width: width, height: height}} className={color+" "+position+" "+fix+" sidebar-basic-style"} >
                    {content}
            </div>
            {
                isShow
                ?   <div className="sidebar-menu-sub" id="sidebar-sub">
                        <div className="sidebar-menu-sub-box">

                        </div>
                    </div>
                : null
            }
        </>
    );
}

export default Sidebar;