import React from "react";

function PersonalInfo(props){
    return(
        <div className="personal-member">
            <img id="Members-img" src={props.img} alt="" />
            <p>{props.user}</p>
        </div>
    )
}

export default PersonalInfo;