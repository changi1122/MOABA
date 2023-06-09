import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./FindidpwShowStyle.css";

export default function FindIDPW() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const findID = () => {
    alert("아이디를 찾았습니다!");
  };

  const findPW = () => {
    alert("패스워드를 찾았습니다!");
  };

  return (
    <div className="find-idpw">
      <form>
        <p className="title">아이디/비밀번호 찾기</p>

        <table>
          <tbody>
            <tr>
              <td><label htmlFor="email">이메일</label></td>
              <td><input id="email" type="email" placeholder="이메일 주소 입력" value={email} onChange={(e) => { setEmail(e.target.value); }} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button className="find-id-button" onClick={findID}>아이디 찾기</button></td>
            </tr>
            <tr><td></td></tr>

            <tr>
              <td><label htmlFor="email">이메일</label></td>
              <td><input id="email" type="email" placeholder="이메일 주소 입력" value={email} onChange={(e) => { setEmail(e.target.value); }} /></td>
            </tr>
            <tr>
              <td><label htmlFor="username">사용자명</label></td>
              <td><input id="username" type="text" placeholder="사용자명 입력" value={username} onChange={(e) => { setUsername(e.target.value); }} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button className="find-pw-button" onClick={findPW}>비밀번호 찾기</button></td>
            </tr>
          </tbody>
        </table>

      </form>
      <span className="circle"></span>
    </div>
  );
}
