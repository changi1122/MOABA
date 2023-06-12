import React from "react";
import { useEffect } from "react";
import Chart from 'react-google-charts';
import "./ResultBoxStyle.css";

export default function AnswerBox({ box, index }){

    if(box.answerType === "단답형"){
        console.log(box.resultTable.length);
        const list = [];

        for(var i=0; i<box.resultTable.length; i++){
            console.log(box.resultTable[i][0]);
            list.push(box.resultTable[i][0])
        }
    }

    const setting = ()=>{
        const list = [];

        for(var i=0; i<box.resultTable.length; i++){
            console.log(box.resultTable[i][0]);
            list.push(
                <p className="boxResult">{box.resultTable[i][0]} <span>{i}</span> </p>
            )
        }

        return list;
    }

    return(
        <div key={index} className="survey-box">
            <div className="survey-question-row">
                <h2 style={{ width:'100%', fontSize:'18px', fontWeight:'normal' }}>
                    { box.question }
                </h2>
            </div>
            {box.answerType === "단답형" && (
                <div className="survey-answer-row">
                    {
                        setting()
                    }
                </div>
            )}
            {box.answerType === "객관식" && (
                <div className="survey-answer-row">
                    <Chart chartType="BarChart" width="100%" height="300px" data={box.resultTable} />
                </div>
            )}
            {box.answerType === "드롭다운" && (
                <div className="survey-answer-row">
                    <Chart chartType="BarChart" width="100%" height="300px" data={box.resultTable} />
                </div>
            )}
            {box.answerType === "체크박스" && (
                <div className="survey-answer-row">
                    <Chart chartType="ColumnChart" width="100%" height="300px" data={box.resultTable} />
                </div>
            )}
        </div>
    );
}
