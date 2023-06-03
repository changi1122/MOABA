import React, {useState, useEffect}from "react";

import "./SidebarStyle.css";
import { useDispatch, useSelector } from "react-redux";

import TempData from "../data/TempData";
import SaveData from "../data/SaveData";

function Sidebar({width, height, color, position, content, fix, isShow}){

    const { click } = useSelector( state => state.counter);
    var temp = TempData.Data;
    var save = SaveData.Data;

    useEffect(()=>{
        if(click==="Temp"){
            StyleChg("Temp-list", "block");
            StyleChg("Save-list", "none");
        }else if(click==="Save"){
            StyleChg("Temp-list", "none");
            StyleChg("Save-list", "block");
        }
    }, [click])

    useEffect(()=>{
        console.log(click);
    })


    function StyleChg(id, style){
        const elements = document.querySelectorAll(`#${id}`);
        elements.forEach((element)=>{
            element.style.display = style;
        })
    }



    if(isShow=== undefined){
        isShow = 1;
    }

    const test2 = (list, id)=>{
        console.log(list);
        const result =[];
        for(let i=0; i<list.length; i++){
            result.push(<p key={i} id={id}> {list[i].title}</p>)
        }
        return result;
    };

    return (
        <>
            <div style={{width: width, height: height}} className={color+" "+position+" "+fix+" sidebar-basic-style"} >
                    {content}
            </div>
            {
                isShow
                ?   <div className="sidebar-menu-sub" id="sidebar-sub">
                        <div className="sidebar-menu-sub-box">
                            {test2(temp, "Temp-list")}
                            {test2(save, "Save-list")}
                        </div>
                    </div>
                : null
            }
        </>
    );
}

export default Sidebar;