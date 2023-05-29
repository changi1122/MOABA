import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import LinkingListItem from './LinkingListItem';
import SrvList from '../done/SrvList';

import "react-day-picker/dist/style.css";
import "./LinkingContent.css"

function LinkingContent() {
    const [selectedDay, setSelectedDay] = useState();
    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div className='content'>
            <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} footer={footer} />
            <div className='linking-list'>
                <LinkingListItem />
                <LinkingListItem />
                <LinkingListItem />
                <LinkingListItem />
                <SrvList/>
            </div>
            <div style={{ height: "1000px" }}></div>
        </div>
    );
}

export default LinkingContent;