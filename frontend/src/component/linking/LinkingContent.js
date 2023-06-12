import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingDetailItem from './LinkingDetailItem';
import LinkingListItem from './LinkingListItem';
import "react-day-picker/dist/style.css";
import "./LinkingContent.css"

export default function LinkingContent() {
    const [selectedDay, setSelectedDay] = useState(Date.now());
    const [todaySurveys, setTodaySurveys] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    useEffect(()=>{
        var today = document.getElementsByClassName("rdp-day_today");
        console.log(today);
        for(let i =0; i<today.length ;i++){
            today[i].click();
        }
    }, [])

    useEffect(() => {
        GetData(format(selectedDay, 'yyyy-MM-dd'));
    }, []);

    useEffect(()=>{
        console.log(todaySurveys);
    },[todaySurveys]);

    const GetData = async (selectedDay)=>{

        const data = {
            "uid" : "1",
        }

        await fetch("/api/get/question", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result=>{
            console.log("result", result);
            console.log(result[selectedDay])
            if(result[selectedDay]){
                const list = [...todaySurveys, ...result[selectedDay]]
                setTodaySurveys(list);
            }else{
                setTodaySurveys([]);
            }
        })
        .catch(error =>{
        console.log(error);
        })
    }
    

    function selectDay(day) {
        if (day) {
            GetData(format(day, 'yyyy-MM-dd'));
            setSelectedDay(day);
        }
    }

    function selectSurvey(index) {
        console.log(index);
        setSelectedSurvey(todaySurveys[index]);
    }

    return (
        <div className='linkingcontent'>
            <div className='list'>
                <div className='sticky'>
                    <DayPicker mode="single" selected={selectedDay} onSelect={selectDay} />
                    <p className='selectedDay'>{format(selectedDay, 'yyyy년 MM월 dd일')} 예정된 설문</p>
                    <div className='linking-list'>
                        {

                           // ShowDailySurv()

                            todaySurveys && todaySurveys.map((survey, index) => (
                                <LinkingListItem
                                    key = {survey.id}
                                    name={survey.name}
                                    answer={survey.answer}
                                    click={() => { selectSurvey(index); }}
                                />
                            ))

                        }
                        {
                            todaySurveys.length === 0 && (
                                <div className='empty'>
                                    <img src={process.env.PUBLIC_URL + '/images/empty.png'} alt="empty list" />
                                    <p>예정된 설문이 없습니다.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='preview'>
                {
                    selectedSurvey && (
                        <LinkingDetailItem
                            id={selectedSurvey.id}
                            name={selectedSurvey.name}
                            dueDate={selectedSurvey.dueDate}
                            meetingDate={selectedSurvey.meetingDate}
                            answer={selectedSurvey.answer}
                        />
                    )
                }
                {
                    selectedSurvey == null && (
                        <div className='empty'>
                            <img src={process.env.PUBLIC_URL + '/images/selection.png'} alt="not selected" />
                            <p>오른쪽에서 설문을 선택하세요.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
