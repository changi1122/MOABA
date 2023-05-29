import React from "react";
import "./SrvRslStyle.css";
import BarChart from "../chart/BarChart";

function SrvRsl(){

    var test = window.innerWidth;
    console.log(test);

    return(
        <div className="SrvRsl-box">
            <p>큐빅 종총 모음</p>

            <ul className="SrvRsl-category">
                <li>대학교</li>
                <li>동아리</li>
                <li>20대</li>
                <li id="date">2023.03.24</li>
            </ul>

            <BarChart/>

            <span className="material-symbols-outlined cancel">
                cancel
            </span>
        </div>
    );
}

export default SrvRsl;