import React from "react";
import Chart from "react-google-charts";

import HorizontalBar from "./HorizontalBar";

import "./BarChartStyle.css";

function BarChart(props){

    return(
        <div className="Horaizon-bar-chart" style={{ maxWidth: props.maxWidth }}>
            {
                props.items && props.items.map((item) => (
                    <HorizontalBar
                        total={item.total}
                        range={item.range}
                        title={item.title}
                    />
                ))
            }
        </div>
    );
}

export default BarChart;