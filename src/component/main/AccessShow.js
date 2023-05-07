import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import "./AccessShowStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { setlogin } from "../../reducers/counter";

function AccessShow(){

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");

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
        console.log(ID);
        console.log(PW);
        navigate('/home');
        dispatch(setlogin());
    }

    return(
        <div className="rightshow center">
            <p>모아봐</p>
            
            <input type="text" placeholder="ID" value={ID} onChange={onIDHandler}/>
            <input type="password" placeholder="PW" value={PW} onChange={onPWHandler}/>

            <button className="right-button" onClick={ValidCheck}>Start</button>

            <p>Sign Up</p>
            <p>Find ID/PW</p>

        </div>
    );
}

export default AccessShow;