import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingDetailItem from './LinkingDetailItem';
import LinkingListItem from './LinkingListItem';

import "react-day-picker/dist/style.css";
import "./LinkingContent.css"

function LinkingContent() {
    const [selectedDay, setSelectedDay] = useState(Date.now());

    const todaySurveys = [
        { name: "종강총회1", date: '2023.03.24', answer: 10 },
        { name: "종강총회2", date: '2023.03.24', answer: 1 },
        { name: "종강총회3", date: '2023.03.24', answer: 12 },
        { name: "종강총회4", date: '2023.03.24', answer: 34 },
    ];

    function selectDay(day)
    {
        if (day)
            setSelectedDay(day);
    }

    return (
        <div className='linkingcontent'>
            <div className='list'>
                <div className='sticky'>
                    <DayPicker mode="single" selected={selectedDay} onSelect={selectDay} />
                    <p className='selectedDay'>{format(selectedDay, 'yyyy년 MM월 dd일')} 진행 중 설문</p>
                    <div className='linking-list'>
                        {
                            todaySurveys && todaySurveys.map((survey) => (
                                <LinkingListItem
                                    key = {survey.name}
                                    name={survey.name}
                                    date={survey.date}
                                    answer={survey.answer}
                                />
                            ))
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