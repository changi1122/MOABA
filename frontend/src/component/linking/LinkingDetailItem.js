import React from "react";
import "./LinkingDetailItem.css";
import { Link } from 'react-router-dom';
import QRCode from "react-qr-code";

export default function LinkingDetailItem(props){

    const kakaoButton = () => {
        if (window.Kakao) {
            const kakao = window.Kakao
    
        if (!kakao.isInitialized()) {
            kakao.init('e0d73d6e60a8750f95a71afb3fca7b2a');
        }
    
            kakao.Share.sendDefault({
                objectType: 'text',
                text: props.name,
                link: {
                mobileWebUrl: `https://moaba.studio1122.net/survey/${props.id}`,
                webUrl: `https://moaba.studio1122.net/survey/${props.id}`,
                },
                serverCallbackArgs: {
                },
            });
        }
    };

    
    return (
        <div className='linking-detail'>
            <h1>{ props.name }</h1>
            <div className='metadata'>
                <table>
                    <tbody>
                    <tr>
                        <td>예정일시</td>
                        <td>{ props.dueDate }</td>
                    </tr>
                    <tr>
                        <td>응답 종료일시</td>
                        <td>{ props.meetingDate }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='action'>
                <a className='qrcode qrcode-style' href={`https://moaba.studio1122.net/survey/${props.id}`} target='_blank'>
                    <QRCode
                        size={100}
                        style={{ display: 'block' }}
                        value={`https://moaba.studio1122.net/survey/${props.id}`}
                        viewBox={`0 0 256 256`}
                    />
                    https://moaba.studio1122.net/survey/{props.id}
                </a>
                <p>{ props.answer }명 응답함</p>
                <a className='active' onClick={kakaoButton}>공유하기</a>
                <Link to={ `/linking/${props.id}` }>결과 보기</Link>
                <Link to={ `/linking/${props.id}` }>장소 탐색</Link>
            </div>
        </div>
    );
}
