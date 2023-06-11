import React from "react";
import { useNavigate } from "react-router-dom";

import "./DeleteAccountShowStyle.css";
import { useDispatch } from "react-redux";
import { setlogout } from "../../reducers/counter";

export default function DeleteAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = () => {
    dispatch(setlogout());
    alert("회원을 탈퇴했습니다!");
    navigate('/');
  };

  return (
    <div className="delete-account">
      <form>
        <p className="title">회원 탈퇴</p>

        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="text">
                  탈퇴 후에는 아이디와 데이터는 복구할 수 없습니다.
                </label>
              </td>
              </tr>
              <tr>
              <td>
                <button className="delete-account-button" onClick={deleteAccount}>
                  탈퇴
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
