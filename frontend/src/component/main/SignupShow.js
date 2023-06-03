import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import "./SignupShowStyle.css";

export default function SignupShow(showState, setShowState) {

    const navigate = useNavigate();
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const [RePW, setRePW] = useState("");
    const [email, setEmail] = useState("");

    const CheckIsValid = (event)=>{
        if(!ID || !PW || !email){
            alert("아이디 또는 패스워드, 이메일이 입력되지 않았습니다.");
            return false;
        }
        if (PW !== RePW) {
            alert("비밀번호 재확인이 일치하지 않습니다.");
            return false;
        }
        navigate('/');
    }

    return(
        <div className="signup">
            <p className='title'>회원가입</p>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor='id'>아이디</label></td>
                        <td><input id='id' type="text" placeholder="아이디 입력" value={ID} onChange={(e) => { setID(e.target.value); }}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='pw'>비밀번호</label></td>
                        <td><input id='pw' type="password" placeholder="비밀번호 입력" value={PW} onChange={(e) => { setPW(e.target.value); }}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='repw'>비밀번호 재입력</label></td>
                        <td><input id='repw' type="password" placeholder="비밀번호 재입력" value={RePW} onChange={(e) => { setRePW(e.target.value); }}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='email'>이메일</label></td>
                        <td><input id='email' type="email" placeholder="이메일 주소 입력" value={email} onChange={(e) => { setEmail(e.target.value); }}/></td>
                    </tr>
                </tbody>
            </table>
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button className="signup-button" onClick={CheckIsValid}>회원가입</button>
            </div>
        </div>
    );
}
