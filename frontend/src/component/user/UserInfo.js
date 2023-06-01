import React from "react";
import "./UserInfoStyle.css"
import user from "../../images/user.jpg";

function UserInfo(){
    return(
        <div className="user-info">
            <img src={user} alt=""/>
            <p>Sori98</p>
            <p>hyun989969@gmail.com</p>
        </div>
    );
}

export default UserInfo;
