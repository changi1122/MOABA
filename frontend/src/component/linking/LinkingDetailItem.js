import React from "react";
import "./LinkingDetailItem.css";
import { Link } from 'react-router-dom';

export default function LinkingDetailItem(props){

    return (
        <div className='linking-detail'>
            <h1>종강총회 참가 여부 조사</h1>
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
            <div className='action'>
                <p>12명 응답함</p>
                <Link to="/linking/1">결과 보기</Link>
                <Link to="/linking/1">장소 탐색</Link>
            </div>
        </div>
    );
}
