import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingDetailItem from './LinkingDetailItem';
import LinkingListItem from './LinkingListItem';

import DailySurv from "../../data/DailySurv.json";

import "react-day-picker/dist/style.css";
import "./LinkingContent.css"

function LinkingContent() {
    const [selectedDay, setSelectedDay] = useState(Date.now());

    useEffect(()=>{
        var today = document.getElementsByClassName("rdp-day_today");
        console.log(today);
        for(let i =0; i<today.length ;i++){
            today[i].click();
        }
    }, [])

    var todaySurveys = DailySurv.Data;

    function selectDay(day)
    {
        if (day)
            setSelectedDay(day);
    }

    function ShowDailySurv(){
        var arr=[];
        for(var i=0; i<todaySurveys.length; i++){
            var dayStr = format(selectedDay, 'yyyy.MM.dd');
            if(dayStr === todaySurveys[i]["date"]){
                arr.push(
                    <LinkingListItem
                        key = {todaySurveys[i]["name"]}
                        name={todaySurveys[i]["name"]}
                        date={todaySurveys[i]["date"]}
                        answer={todaySurveys[i]["answer"]}
                    />
                )
            }
        }

        if(arr.length ===0 ){
            arr.push(
                <div className="Resting-day">
                    <span class="material-symbols-outlined material-Resting">
                        coffee
                    </span>
                    <p>Resting ...</p>
                </div>
            )
        }

        return arr
    }

    return (
        <div className='linkingcontent'>
            <div className='list'>
                <div className='sticky'>
                    <DayPicker mode="single" selected={selectedDay} onSelect={selectDay} />
                    <p className='selectedDay'>{format(selectedDay, 'yyyy년 MM월 dd일')} 진행 중 설문</p>
                    <div className='linking-list'>
                        {
                            ShowDailySurv()
                        }
                    </div>
                </div>
            </div>
            <div className='preview'>
                <LinkingDetailItem />
            </div>
        </div>
    );
}

export default LinkingContent;