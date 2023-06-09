import React, { useState, useEffect } from "react";
import "../component//answer/AnswerForm";
import AnswerBox from "../component/answer/AnswerBox";
import Layout from "../component/Layout";

export default function SAnswerPage() {

  const [form, setForm] = useState({});

  const loadForm = async (id) => {
    const response = await fetch(`/data/form/${id}/survey.json`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    if (!data) return;

    if (data) {
        setForm(data);
    } else {
        setForm({});
    }
  }

  useEffect(() => {
    loadForm(1);
  }, []);

  const setInput = (qIndex, value) => {
    setForm((form) => {
      let newForm = { ...form };
      newForm.questions[qIndex].input = value;
      return newForm;
    });
  }
  
  function getAnswerForm() {
    return (
    <div className='answerform' style={{ width: '100%' }}>
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
          <button>제출하기</button>
        </div>
      </div>
    </div>
    );
  }

  return (
    <Layout
        header={"Linking"}
        body={getAnswerForm()}
        align_items={"Layout-center"}
        T_styel={"content-H"}
        color={"white-blue-color"}
    />
  );
}