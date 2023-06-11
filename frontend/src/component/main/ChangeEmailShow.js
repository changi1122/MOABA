import React, { useState } from "react";

import "./ChangeEmailShowStyle.css";

export default function ChEmail() {
  const [email, setEmail] = useState("");

  const chEmail = () => {
    alert("이메일을 변경했습니다!");
  };

  return (
    <div className="ch-email">
      <form>
        <p className="title">이메일 변경</p>

        <table>
          <tbody>
            <tr>
              <td><label htmlFor="email">새 이메일</label></td>
              <td><input id="email" type="email" placeholder="이메일 주소 입력" value={email} onChange={(e) => { setEmail(e.target.value); }} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button className="ch-email-button" onClick={chEmail}>변경</button></td>
            </tr>
          </tbody>
        </table>

      </form>
    </div>
  );
}
