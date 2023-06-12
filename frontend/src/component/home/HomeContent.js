import React from "react";
import Recommend from "./Recommend";

import "./HomeContentStyle.css";
import IconHorazion from "../IconHorazion";
import { useNavigate } from "react-router-dom";

function HomeContent(){

    var navigate = useNavigate();
        
    function scrollToTop(duration) {
        var start = window.pageYOffset;
        var end = 0;
        var startTime = null;
    
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / duration, 1);
            var scrollTo = start + ((end - start) * progress);

            window.scrollTo(0, scrollTo);
        
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    function MoveToSave(){
        navigate('/save');
    }

    function ActionCall(){
        //scrollToTop(500);
        window.scrollTo(0,0);
        MoveToSave();
    }

    

    return(
        <div className="HC-body">
            <IconHorazion
                classN = "material-symbols-set"
                icon = "recommend"
                CtntStyle = "material-text"
                content = "모임"
            />
        
            <Recommend
                Limit={true}
            />

            <div className="to-template">
                <p onClick={ActionCall}>MORE</p>
            </div>
        </div>
    );
}

export default HomeContent;