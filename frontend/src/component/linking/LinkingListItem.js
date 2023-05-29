import React from "react";
import "./LinkingListItem.css";
import BarChart from "../chart/BarChart";
import { Link } from 'react-router-dom';

function LinkingListItem(){

    const items = [
        { title: "찬성", total: 35, range: 30 },
        { title: "반대", total: 35, range: 5 },

    ];

    return (
        <Link to='/linking/1'>
            <div className="linkinglistitem-box">
                <div className='linkinglistitem-text'>
                    <p>큐빅 종총 모음</p>

                    <ul className="linkinglistitem-category">
                        <li>대학교</li>
                        <li>동아리</li>
                        <li>20대</li>
                        <li id="date">2023.03.24</li>
                    </ul>
                </div>

                <BarChart items={items} maxWidth={400}/>

                <span className="material-symbols-outlined cancel">
                    cancel
                </span>
            </div>
        </Link>
    );
}

export default LinkingListItem;