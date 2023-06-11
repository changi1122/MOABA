import React from "react";
import UserInfo from "./UserInfo";
import DrpdwnInfo from "./DrpdwnInfo";

import "./UserContentStyle.css"

function UserContent(){

    return(
        <div className="right-content">
            <UserInfo/>

            <DrpdwnInfo
                header={"개인정보"}
                cntnt1={"비밀번호 변경"}
                action1={"/change-pw"}
                cntnt2={"이메일 변경"}
                action2={"/ch-email"}
                cntnt3={"회원 탈퇴"}
                action3={"/delete-account"}
            />

            <DrpdwnInfo
                header={"내 모임"}
                cntnt1={"모집중"}
                action1={"/linking"}
                cntnt2={"지나간 모임 보기"}
                action2={"/done"}
                cntnt3={"내 모임 삭제"}
            />
        </div>
    );

}

export default UserContent;