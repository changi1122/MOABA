import React, { useState } from "react";
import "./AnswerForm.css";
import AnswerBox from "./AnswerBox";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function AnswerForm() {

  const [form, setForm] = useState({});
  const [answer, setAnswer] = useState({});

  const { id } = useParams();

  const loadForm = async (id) => {
    const response = await fetch(`/data/form/${id}/survey.json`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    if (!data) return;

    if (data) {
        setForm(data);
    } else {
        setForm({});
    }
  }

  useEffect(()=>{
    console.log("sdf : ", answer);
  }, [answer])

  const GET = async()=>{
    
    const data={
      "qid": `${id}`
    }

    await fetch("/api/get/questionForm",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }) 
    .then(response => response.json())
    .then(result=>{
        const sending={
            "sending" : []
        }
        for(var i=0; i<result.questions.length; i++){
          result.questions[i].input = "";
          sending.sending.push({"uid":"1", "boxid":null, "answer": null})
        }
        console.log("sees : " , sending);
        setAnswer(sending);
        setForm(result);
    })
    .catch(error =>{
        console.log(error);
    })
  }

  useEffect(() => {
    GET()
  }, []);

  const setInput = (qIndex, value, eanswerType, eboxid, answerIndex) => {
    console.log(qIndex, value, eanswerType, eboxid,  answerIndex)

    var datas="null";
    if(eanswerType==='단답형'){
      datas = value;
    }

    setAnswer((answer)=>{
      let newAnswer = { ...answer};
      newAnswer.sending[qIndex].boxid = `${eboxid[answerIndex]}`;
      newAnswer.sending[qIndex].answer = datas;
      return newAnswer;
    })

    setForm((form) => {
      let newForm = { ...form };
      newForm.questions[qIndex].input = value;
      return newForm;
    });
  }
  
  const Send = async ()=>{
    console.log(answer);

    await fetch("/api/save/answer", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(answer)
    })
    .then(response => response.json())
    .then(result=>{
      alert("제출에 성공했습니다");
      window.location.reload();
    })
    .catch(error =>{
        alert("제출에 성공했습니다");
        window.location.reload();
    })
  }

  return (
    <div className='answerform'>
      <div className="survey">
        <h1>{form.name}</h1>
        <div className="survey-category-row" style={{ alignItems: 'center' }}>
          <div className="survey-category-input">
            {form.categories && form.categories.map((category, index) => (
              <div className='tag' key={index}>
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className='metadata'>
            <table>
              <tbody>
                <tr>
                  <td>모임 예정일시</td>
                  <td>{form.meetingDate}</td>
                </tr>
                <tr>
                  <td>응답 종료일시</td>
                  <td>{form.dueDate}</td>
                </tr>
              </tbody>
            </table>
        </div>



        {form.questions && form.questions.map((question, index) => (
          <AnswerBox
            key={index}
            box={question}
            setInput={setInput}
            index={index}
          />
        ))}
        <div className="survey-buttons">
          <button onClick={Send}>제출하기</button>
        </div>
      </div>
    </div>
  );
}
