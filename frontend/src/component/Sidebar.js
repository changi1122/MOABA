import React, {useState, useEffect}from "react";

import "./SidebarStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { droptemplist, savetemplist } from "../reducers/counter";

function Sidebar({width, height, color, position, content, fix, isShow}){

    const dispacth = useDispatch();

    const { temp } = useSelector( state => state.counter);

    const { click } = useSelector( state => state.counter);

    useEffect(()=>{
        GetData();
    }, [])

    useEffect(()=>{
        console.log("sdfs : ",temp);
    }, [temp]);

    const GetData = async () =>{
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
    }

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
        if(list === null){
            return result
        }
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
                            {test2(null, "Temp-list")}
                            {test2(null, "Save-list")}
                        </div>
                    </div>
                : null
            }
        </>
    );
}

export default Sidebar;