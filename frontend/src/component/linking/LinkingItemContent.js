import React, { useState } from 'react';
import { Chart } from "react-google-charts";

import "react-day-picker/dist/style.css";
import "./LinkingItemContent.css"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import PlaceWindow from './PlaceWindow';
import SqlideSlideCont from './SqlideSlideCont';


import LinkingItem from "../../data/Linkingitem.json";

function LinkingItemContent() {

    const [isWindowOpened, setIsWindowOpened] = useState(false);
    const [name, setName] = useState("주목원");

    var linkingItem = LinkingItem.Data;

    const oneSampleData = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    function openPlaceWindow(name) {
        setName(name);
        setIsWindowOpened(true);
    }

    function MakeShowItem(){
        var arr= [];
        // 여기에 분류 위한 조건문 추가 

        // 셔플
        linkingItem.sort(() => Math.random() - 0.5);
        
        for(var i = 0; i < linkingItem.length; i++){
            arr.push(
                <SplideSlide key={i}>
                    <SqlideSlideCont
                        img =  {linkingItem[i]["img"]}
                        storeN = {linkingItem[i]["storeN"]}
                        BtnStr = {linkingItem[i]["BtnStr"]}
                        action = {openPlaceWindow}
                    />
                </SplideSlide>
            )
        }

        return arr;
    }

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

            <div className='place-recommend'>
                <h1 id='place'>장소 추천</h1>
                <Splide
                    aria-label="Recommended Places"
                    options={{
                        perPage: 3,
                        rewind : true,
                    }}>
                    
                    {
                        MakeShowItem()
                    }
                </Splide>
            </div>
            {
                isWindowOpened && (
                    <>
                        <div style={{
                            position:'fixed',
                            backgroundColor:'rgba(0,0,0,0.2)',
                            top:'0',
                            left:'0',
                            width:'100%',
                            height:'100vh'
                            }}></div>
                        <div className='place-window'>
                            <PlaceWindow setIsWindowOpened={setIsWindowOpened} name={name}/>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default LinkingItemContent;