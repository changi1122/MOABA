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

            <div className="to-template">
                <div>
                    <span className="material-symbols-outlined to-template-icon-style">
                        expand_more
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;