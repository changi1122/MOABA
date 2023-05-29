import React from "react";
import tag from "../../images/tag.png"
import { useNavigate } from "react-router-dom";

function PageMoveB({style,icon, animation="", content, url, data}){
    
    var navigate = useNavigate();
    function MoveToTempPage(){
        console.log(data);
        var str = '/page/'+data;
        console.log(str)
        navigate(str);
    }

    return(
    
        <button className={`${style} ${animation}`} onClick={ data? MoveToTempPage : url}>
            <span className="material-symbols-outlined material-symbols-size">
                {icon}
            </span>
            {
                url === undefined
                ? <p>{content} <img className="tag" src={tag} alt=""/></p> 
                : <p>{content} </p> 
            }
        </button>
    );
}

export default PageMoveB;