import React from "react";
import { useEffect } from "react";
import Chart from 'react-google-charts';

export default function AnswerBox({ box, index }){

    return(
        <div key={index} className="survey-box">
            <div className="survey-question-row">
                <h2 style={{ width:'100%', fontSize:'18px', fontWeight:'normal' }}>
                    { box.question }
                </h2>
            </div>
            {box.answerType === "단답형" && (
                <div className="survey-answer-row">
                    <Chart
                        chartType="PieChart"
                        data={box.result}
                        width={"100%"}
                        height={"300px"}
                    />
                </div>
            )}
            {box.answerType === "객관식" && (
                <div className="survey-answer-row">
                    <Chart chartType="BarChart" width="100%" height="300px" data={box.result} />
                </div>
            )}
            {box.answerType === "드롭다운" && (
                <div className="survey-answer-row">
                    <Chart chartType="BarChart" width="100%" height="300px" data={box.result} />
                </div>
            )}
            {box.answerType === "체크박스" && (
                <div className="survey-answer-row">
                    <Chart chartType="ColumnChart" width="100%" height="300px" data={box.result} />
                </div>
            )}
        </div>
    );
}
