import React from "react";
import "./LinkingDetailItem.css";

export default function LinkingDetailItem(props){

    return (
        <div className='linking-detail'>
            <h1>종강총회 참가 여부 조사</h1>
            <div className='metadata'>
                <table>
                    <tbody>
                    <tr>
                        <td>생성일</td>
                        <td>2023.05.30</td>
                    </tr>
                    <tr>
                        <td>응답 종료일</td>
                        <td>2023.06.13</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='question'>
                <div className='question-box question-single'>
                    <h2><span className=''>1번</span> 이름은? (단답형)</h2>
                    <div style={{ height: '250px', backgroundColor: '#eee' }}>원 그래프</div>
                </div>
                <div className='question-box question-single'>
                    <h2><span className=''>2번</span> 학번은? (객관식)</h2>
                    <div style={{ height: '250px', backgroundColor: '#eee' }}>수평 막대 그래프</div>
                </div>

                <div className='question-box question-single'>
                    <h2><span className=''>3번</span> 학년은? (드롭다운)</h2>
                    <div style={{ height: '250px', backgroundColor: '#eee' }}>수직 막대 그래프</div>
                </div>

                <div className='question-box question-single'>
                    <h2><span className=''>4번</span> 수강 과목은? (체크박스)</h2>
                    <div style={{ height: '250px', backgroundColor: '#eee' }}>표 형태로 보여주기</div>
                </div>
            </div>
        </div>
    );
}
