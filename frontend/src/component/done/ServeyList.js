import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingDetailItem from '../linking/LinkingDetailItem';
import LinkingListItem from '../linking/LinkingListItem';

import "react-day-picker/dist/style.css";
import "../linking/LinkingContent.css"

export default function SurveyList(){
    const [selectedDay, setSelectedDay] = useState(Date.now());
    const [todaySurveys, setTodaySurveys] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    useEffect(() => {
        loadTodaySurveys(selectedDay);
    }, []);

    const loadTodaySurveys = async (date) => {
        const response = await fetch(`/data/LinkingItemList.json`, {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        const data = await response.json();
        if (!data) return;

        if (data[date]) {
            setTodaySurveys(data[date]);
        } else {
            setTodaySurveys([]);
        }
    }

    function selectDay(day)
    {
        if (day) {
            loadTodaySurveys(format(day, 'yyyy-MM-dd'));
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
                                    <img src={process.env.PUBLIC_URL + '/images/empty.png'} alt="empty list"/>
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
                        <img src={process.env.PUBLIC_URL + '/images/selection.png'} alt="not selected"/>
                        <p>오른쪽에서 설문을 선택하세요.</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
}
