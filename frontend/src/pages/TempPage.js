import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import "./TempPageStyle.css";

export default function TempPage(props){


    const [no, SetNo] = useState(0);
    const [yes, SetYes] = useState(0);

    var {id}= useParams();

    useEffect(()=>{
        console.log(yes);
    }, [yes]);

    const getData = async ()=>{
        const response = await fetch(`/data/answer/1/answerT.json`,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.json();
    }

    const Test = async ()=>{
        const data = await getData();
        console.log(data.yes);
        const yes = data.yes+3;
        SetYes(yes);
    }
    


    const GetTest = async ()=>{

        const body = {
            qid: "25",
        };

        await fetch("/api/get",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .then(result=>{
        console.log("result", result);
        })
        .catch(error =>{
        console.log(error);
        })
    }


    return(
        <div className="test-sss">
            {id}
            <button onClick={Test} >TRFD</button>

            <button onClick={GetTest} > getData</button>
        </div>
    )
}
