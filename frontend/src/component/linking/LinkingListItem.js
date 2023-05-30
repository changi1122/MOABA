import React from "react";
import "./LinkingListItem.css";
import BarChart from "../chart/BarChart";
import { Link } from 'react-router-dom';

function LinkingListItem(props){

    return (
        <div className="linkinglistitem-box">
            <div className='linkinglistitem-text'>
                <p>{ props.name }</p>
                <div className='linkinglistitem-answer'>
                    <p>{ props.answer }명 응답</p>
                </div>
            </div>
        </div>
    );
}

export default LinkingListItem;