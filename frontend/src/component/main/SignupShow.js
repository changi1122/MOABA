import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import "./SignupShowStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { setlogin } from "../../reducers/counter";

export default function SignupShow(showState, setShowState) {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const [REPW, setREPW] = useState("");

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value);
    }

    const onPWHandler = (event)=>{
        setPW(event.currentTarget.value);
    }

    const ValidCheck = (event)=>{
        if(ID ==="" || PW===""){
            alert("ID or PW is Empty");
            return false;
        }
        navigate('/');
        dispatch(setlogin());
    }

    return(
        <div className="rightshow center">
            <p>회원가입</p>
            
            <input type="text" placeholder="ID" value={ID} onChange={onIDHandler}/>
            <input type="password" placeholder="PW" value={PW} onChange={onPWHandler}/>

            <button className="right-button" onClick={ValidCheck}>Start</button>

            <p>Sign Up</p>
            <p>Find ID/PW</p>

        </div>
    );
}
