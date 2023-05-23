import React from "react";
import "./UserInfoStyle.css"
import user from "../../images/user.png";

function UserInfo(){
    return(
        <div className="user-info">
            <img src={user} alt=""/>
            <p>Username</p>
            <p>Email</p>
        </div>
    );
}

export default UserInfo;
