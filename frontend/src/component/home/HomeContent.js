import React from "react";
import Recommend from "./Recommend";

import "./HomeContentStyle.css";
import IconHorazion from "../IconHorazion";

function HomeContent(){

    return(
        <div className="HC-body">
            <IconHorazion
                classN = "material-symbols-set"
                icon = "recommend"
                CtntStyle = "material-text"
                content = "모임"
            />
            
            <Recommend/>
        </div>
    );
}

export default HomeContent;