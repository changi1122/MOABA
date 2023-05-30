import React, {useState, useEffect}from "react";

import "./SidebarStyle.css";
import { useDispatch, useSelector } from "react-redux";

function Sidebar({width, height, color, position, content, fix, isShow}){

    const { click } = useSelector( state => state.counter);

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

    const TempData = [
        {"title" : "CUVIC 1", "id" : 1},
        {"title" : "CUVIC 2", "id" : 2},
        {"title" : "CUVIC 3", "id" : 3},
        {"title" : "CUVIC 4", "id" : 4},
        {"title" : "CUVIC 5", "id" : 5},
        {"title" : "CUVIC 6", "id" : 6}
    ]

    const SaveData = [
        {"title" : "CUVIC2 1", "id" : 1},
        {"title" : "CUVIC2 2", "id" : 2},
        {"title" : "CUVIC2 3", "id" : 3},
        {"title" : "CUVIC2 4", "id" : 4},
        {"title" : "CUVIC2 5", "id" : 5},
        {"title" : "CUVIC2 6", "id" : 6}
    ]

    if(isShow=== undefined){
        isShow = 1;
    }

    const test2 = (list, id)=>{
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
                            {test2(TempData, "Temp-list")}
                            {test2(SaveData, "Save-list")}
                        </div>
                    </div>
                : null
            }
        </>
    );
}

export default Sidebar;