import React from "react";

import TextSpin from "./TextSpin";

import "./IntroShowStyle.css";

function IntroShow(){

    return(
        <div className="leftshow center">
            <h3 className="left-text">IF YOU CAN?</h3>
            <p className="left-text">링크 <span className="white-blue-color">하나로</span> <br/> <span className="white-blue-color">인원모집</span>부터 <span className="white-blue-color">장소</span>까지</p>
            <TextSpin
                text1="빠르게"
                text2="간편하게"
                text3="단순하게"
            />
        </div>
    );

}

export default IntroShow;