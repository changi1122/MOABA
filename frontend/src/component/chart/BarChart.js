import React from "react";
import Chart from "react-google-charts";

import HoraizonBar from "./HorazionBar";

import "./BarChartStyle.css";

function BarChart(){

    return(
        <div className="Horaizon-bar-chart">

            <HoraizonBar
                total={"35"}
                range={"30"}
                title={"찬성"}
            />
            <HoraizonBar
                total={"35"}
                range={"5"}
                title={"반대"}
            />

        </div>
    );
}

export default BarChart;