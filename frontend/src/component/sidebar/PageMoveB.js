import React from "react";
import { useNavigate } from "react-router-dom";

function PageMoveB({Bstyle,icon,openicon, animation="", content, url, data}){
    
    var navigate = useNavigate();
    function MoveToTempPage(){

        console.log(data);
        var str = '/page/'+data;
        console.log(str)

        navigate(str);
    }

    function Open(){
        document.getElementById(`${content}`).innerHTML = openicon;
    }

    function Close(){
        document.getElementById(`${content}`).innerHTML = icon;
    }

    function None(){
    }

    return(
        <button className={`${Bstyle} ${animation}`} onClick={ data? MoveToTempPage() : url} onMouseOver={openicon? Open : None} onMouseOut={ openicon? Close: None}>
            <span className="material-symbols-outlined material-symbols-size" id={`${content}`}>
                {icon}
            </span>
            <p>{content} </p> 
        </button>
    );
}

export default PageMoveB;