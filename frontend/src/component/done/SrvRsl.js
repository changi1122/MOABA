import React from "react";
import "./SrvRslStyle.css";
import BarChart from "../chart/BarChart";

function SrvRsl(){

    const items = [
        { title: "찬성", total: 35, range: 30 },
        { title: "반대", total: 35, range: 5 },
    ];

    return(
        <div className="SrvRsl">
            <div className='SrvRsl-box'>
                <div className='SrvRsl-text'>
                    <p>큐빅 종총 모음</p>

                    <ul className="SrvRsl-category">
                        <li>대학교</li>
                        <li>동아리</li>
                        <li>20대</li>
                        <li id="date">2023.03.24</li>
                    </ul>
                </div>

                <BarChart items={items} maxWidth={400}/>
            </div>


            <span className="material-symbols-outlined cancel">
                cancel
            </span>
        </div>
    );
}

export default SrvRsl;