import React from "react";
import "./CrtSurveyStyle.css";

import ShortText from "../survey/ShortText";


function CrtSurvey(){
    return(
        <div className="survey">
            <input type="text" placeholder="질문"/> 
            <hr />
            <ShortText/>
        </div>
    );
}

export default CrtSurvey;