import React from "react";
import { useNavigate } from "react-router-dom";

function PersonalInfo(props){
    return(
        <div className={props.className}>
            <img className={props.imgN} src={props.img} alt="" />
            {
                props.isLink
                ? <a className="github-link" href={props.user}>Move To GitHub Page<br /> <span>Click Here!</span> </a>
                : <p>{props.user}</p> 
            }
    
        </div>
    )
}

export default PersonalInfo;