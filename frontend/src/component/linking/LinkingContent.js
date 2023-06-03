import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingDetailItem from './LinkingDetailItem';
import LinkingListItem from './LinkingListItem';

import "react-day-picker/dist/style.css";
import "./LinkingContent.css"

function LinkingContent() {
    const [selectedDay, setSelectedDay] = useState(Date.now());
    const [todaySurveys, setTodaySurveys] = useState([]);

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
        console.log(response.body)
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

    return (
        <div className='linkingcontent'>
            <div className='list'>
                <div className='sticky'>
                    <DayPicker mode="single" selected={selectedDay} onSelect={selectDay} />
                    <p className='selectedDay'>{format(selectedDay, 'yyyy년 MM월 dd일')} 예정된 설문</p>
                    <div className='linking-list'>
                        {
                            todaySurveys && todaySurveys.map((survey) => (
                                <LinkingListItem
                                    key = {survey.id}
                                    name={survey.name}
                                    answer={survey.answer}
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
                <LinkingDetailItem />
            </div>
        </div>
    );
}

export default LinkingContent;