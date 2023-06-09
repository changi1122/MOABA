import React from "react";
import { useEffect } from 'react';

export default function AnswerBox({ box, setInput, index }){

    function toggleInput(input, value) {
        if (input.includes(value)) {
            input.splice(input.indexOf(value), 1);
        } else {
            input.push(value);
        }
        return input;
    }


    return(
        <div key={index} className="survey-box">
            <div className="survey-question-row">
                <h2 style={{ width:'100%', fontSize:'18px', fontWeight:'normal' }}>
                    { box.question }
                </h2>
                <p style={{ color: '#777', fontSize: '14px', whiteSpace: 'nowrap' }}>선택: { box.input.toString() }</p>
            </div>
            {box.answerType === "단답형" && (
                <div className="survey-answer-row">
                <input
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    type="text"
                    value={box.input}
                    onChange={(e) => setInput(index, e.target.value)}
                />
                </div>
            )}
            {box.answerType === "객관식" && (
                <div className="survey-answer-row">
                {box.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className='answerBox checkbox-row' onClick={() => setInput(index, answer)}>
                        <input
                            type="radio"
                            checked={answer == box.input}
                        />
                        <p>{ answer }</p>
                    </div>
                ))}
                </div>
            )}
            {box.answerType === "드롭다운" && (
                <div className="survey-answer-row">
                    <select onChange={(e) => { setInput(index, e.target.value); }}>
                        {box.answers.map((answer, answerIndex) => (
                            <option key={answerIndex} value={answer}>{ answer }</option>
                        ))}
                    </select>
                </div>
            )}
            {box.answerType === "체크박스" && (
                <div className="survey-answer-row">
                {box.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className='answerBox checkbox-row' onClick={() => {
                        setInput(index, toggleInput(box.input, answer));
                    }}>
                        <input
                            type="checkbox"
                            checked={box.input.includes(answer)}
                        />
                        <p>{ answer }</p>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}
