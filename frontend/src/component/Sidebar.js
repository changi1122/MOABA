import React, {useState, useEffect}from "react";

import "./SidebarStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { droptemplist, savetemplist } from "../reducers/counter";
import { useNavigate } from 'react-router-dom';


function Sidebar({width, height, color, position, content, fix, isShow}){

    const dispacth = useDispatch();

    const navigate = useNavigate();
    const { click, temp } = useSelector( state => state.counter);

    /*const GetData = async () =>{
        const response= await fetch(`/data/temp/temp.json`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        console.log("sdfsdfsdfsdf" , data);
        var list =[];
        for(var i=0; i<data["Data"].length; i++){
            var t ={
                "name" : data["Data"][i]["name"],
                "id":i,
                "meetingDate":data["Data"][i]["meetingDate"]
            }

            console.log(t)
            list.push(t)
        }

        console.log(list);

        if (!data) return;

        if (data) {
            dispacth(savetemplist(list));
        } else {
            
        }
    }*/

    useEffect(()=>{
        if(click==="Temp"){
            StyleChg("Temp-list", "block");
            StyleChg("Save-list", "none");
        }else if(click==="Save"){
            StyleChg("Temp-list", "none");
            StyleChg("Save-list", "block");
        }
    }, [click])


    function StyleChg(id, style){
        const elements = document.querySelectorAll(`#${id}`);
        elements.forEach((element)=>{
            element.style.display = style;
        })
    }

    function navigateToTempSaved(id) {
        navigate(`/temp/page/${id}`);
    }



    if(isShow=== undefined){
        isShow = 1;
    }

    const test2 = (list, id)=>{
        const result =[];
        if(temp === null){
            return result
        }
        for(const item of temp){
            if (item && item.id) {
                result.push(<p className='listItem' key={item.id} index={item.id} onClick={() => { navigateToTempSaved(item.id) }}> {item.title}</p>)
            }
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
                            {test2(null, "Temp-list")}
                        </div>
                    </div>
                : null
            }
        </>
    );
}

export default Sidebar;