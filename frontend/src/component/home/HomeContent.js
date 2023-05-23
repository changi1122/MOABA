import React from "react";
import Recommend from "./Recommend";

import "./HomeContentStyle.css";

function HomeContent(){

    return(
        <div className="HC-body">
            <p>오늘은 누구를 만나세요?</p>
            <Recommend/>
        </div>
    );
}

export default HomeContent;