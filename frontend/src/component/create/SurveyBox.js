import React from "react";

function SurveyBox({ box, index, handleQuestionChange, handleAnswerTypeChange, handleSingleChoiceAnswerChange, handleAnswerChange, handleCheckboxAnswerChange, deleteBox, addAnswer, deleteAnswer }){
    return(
        <div key={index} className="survey-box">
            <div className="survey-question-row">
                <input
                type="text"
                placeholder="질문"
                value={box.question}
                style={{ width: '100%' }}
                onChange={(event) => handleQuestionChange(index, event)}
                />
                <select
                value={box.answerType}
                onChange={(event) => handleAnswerTypeChange(index, event)}
                className="survey-select"
                >
                <option value="단답형">단답형</option>
                <option value="객관식">객관식</option>
                <option value="드롭다운">드롭다운</option>
                <option value="체크박스">체크박스</option>
                </select>
                <span className="material-symbols-outlined survay-icon-color survay-icon-font-M" onClick={() => deleteBox(index)}>
                        delete_forever
                </span>
            </div>
            {box.answerType === "단답형" && (
                <div className="survey-answer-row">
                <input
                    type="text"
                    placeholder="답변"
                    value={box.answers[0]}
                    onChange={(event) => handleAnswerChange(index, 0, event)}
                />
                </div>
            )}
            {box.answerType === "객관식" && (
                <div className="survey-answer-row">
                {box.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className='answerBox'>
                        <input
                            type="radio"
                            checked={box.selectedAnswerIndex === answerIndex}
                            onChange={() => handleSingleChoiceAnswerChange(index, answerIndex)}
                        />
                        <input
                            type="text"
                            placeholder="답변"
                            value={answer}
                            onChange={(event) =>
                            handleAnswerChange(index, answerIndex, event)
                            }
                        />
                        <button onClick={() => deleteAnswer(index, answerIndex)}>
                            삭제
                        </button>
                    </div>
                ))}
                <button onClick={() => addAnswer(index)}>답변 추가</button>
                </div>
            )}
            {box.answerType === "드롭다운" && (
                <div className="survey-answer-row">
                {box.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className='answerBox'>
                    <input
                        type="text"
                        placeholder="답변"
                        value={answer}
                        onChange={(event) =>
                        handleAnswerChange(index, answerIndex, event)
                        }
                    />
                    <button onClick={() => deleteAnswer(index, answerIndex)}>
                        삭제
                    </button>
                    </div>
                ))}
                    <button onClick={() => addAnswer(index)}>답변 추가</button>
                </div>
            )}
            {box.answerType === "체크박스" && (
                <div className="survey-answer-row">
                {box.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className='answerBox'>
                    <input
                        type="checkbox"
                        checked={answer.isChecked}
                        onChange={() =>
                        handleCheckboxAnswerChange(index, answerIndex)
                        }
                    />
                    <input
                        type="text"
                        placeholder="답변"
                        value={answer.text}
                        onChange={(event) =>
                        handleAnswerChange(index, answerIndex, event)
                        }
                    />
                    <button onClick={() => deleteAnswer(index, answerIndex)}>
                        삭제
                    </button>
                    </div>
                ))}
                <button onClick={() => addAnswer(index)}>답변 추가</button>
                </div>
            )}
        </div>
    );
}

export default SurveyBox;