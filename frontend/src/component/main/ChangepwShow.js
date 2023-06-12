import React, { useState } from "react";

import "./ChangepwShowStyle.css";

export default function ChangePW() {
  const [username, setUsername] = useState("");

  const changePW = () => {
    alert("패스워드를 변경했습니다!");
  };

  return (
    <div className="change-pw">
      <form>
        <p className="title">비밀번호 변경</p>

        <table>
          <tbody>
            <tr>
              <td><label htmlFor="username">새 비밀번호</label></td>
              <td><input id="username" type="text" placeholder="비밀번호 입력" value={username} onChange={(e) => { setUsername(e.target.value); }} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button className="change-pw-button" onClick={changePW}>변경</button></td>
            </tr>
          </tbody>
        </table>

      </form>
    </div>
  );
}
