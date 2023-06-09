import React from "react";
import "./UserInfoStyle.css"

function UserInfo(){
    return(
        <div className="user-info">
            <img src={process.env.PUBLIC_URL + "./images/user.jpg"} alt=""/>
            <p>Sori98</p>
            <p>hyun989969@gmail.com</p>
        </div>
    );
}

export default UserInfo;
