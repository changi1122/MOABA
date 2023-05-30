import React, { useState } from 'react';
import { Chart } from "react-google-charts";

import "react-day-picker/dist/style.css";
import "./LinkingItemContent.css"


function LinkingItemContent() {

    const oneSampleData = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const tableData = [
        ["Name", "Salary", "Full time employee"],
        ["Mike", { v: 10000, f: "$10,000" }, true],
        ["Jim", { v: 8000, f: "$8,000" }, false],
        ["Alice", { v: 12500, f: "$12,500" }, true],
        ["Bob", { v: 7000, f: "$7,000" }, true],
      ];
      
    const tableOptions = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
        pageSize: 1,
    };

    return (
        <div className='content'>
            <form className='linking-form'>
                <h1>개총 인원 모집</h1>
                <div className='metadata'>
                <table>
                    <tbody>
                        <tr>
                            <td>생성일시</td>
                            <td>2023.05.30 10:40</td>
                        </tr>
                        <tr>
                            <td>응답 종료일시</td>
                            <td>2023.06.13 12:00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='question'>
                    <div className='question-box question-single'>
                        <h2><span className=''>1번</span> 이름은? (단답형)</h2>
                        <Chart
                            chartType="PieChart"
                            data={oneSampleData}
                            options={{ title: "이름은?" }}
                            width={"100%"}
                            height={"400px"}
                        />
                    </div>
                    <div className='question-box question-single'>
                        <h2><span className=''>2번</span> 학번은? (객관식)</h2>
                        <Chart chartType="BarChart" width="100%" height="400px" data={oneSampleData} />
                    </div>

                    <div className='question-box question-single'>
                        <h2><span className=''>3번</span> 학년은? (드롭다운)</h2>
                        <Chart chartType="ColumnChart" width="100%" height="400px" data={oneSampleData} />
                    </div>

                    <div className='question-box question-single'>
                        <h2><span className=''>4번</span> 수강 과목은? (체크박스)</h2>
                        <div style={{ height: '250px', backgroundColor: '#eee' }}>표 형태로 보여주기</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LinkingItemContent;