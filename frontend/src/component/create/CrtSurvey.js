import React, { useState } from "react";
import "./CrtSurveyStyle.css";
import ShortText from "../survey/ShortText";

function SurveyBox({ box, index, handleQuestionChange, handleAnswerTypeChange, handleSingleChoiceAnswerChange, handleAnswerChange, handleCheckboxAnswerChange, deleteBox, addAnswer, deleteAnswer }) {
  return (
    <div key={index} className="box">
      <div className="question-row">
        <input
          type="text"
          placeholder="질문"
          value={box.question}
          onChange={(event) => handleQuestionChange(index, event)}
        />
        <select
          value={box.answerType}
          onChange={(event) => handleAnswerTypeChange(index, event)}
        >
          <option value="단답형">단답형</option>
          <option value="객관식">객관식</option>
          <option value="드롭다운">드롭다운</option>
          <option value="체크박스">체크박스</option>
        </select>
        <button onClick={() => deleteBox(index)}>삭제</button>
      </div>
      {box.answerType === "단답형" && (
        <div className="answer-row">
          <input
            type="text"
            placeholder="답변"
            value={box.answers[0]}
            onChange={(event) => handleAnswerChange(index, 0, event)}
          />
        </div>
      )}
      {box.answerType === "객관식" && (
        <div className="answer-row">
          {box.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
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
        <div className="answer-row">
          {box.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
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
        <div className="answer-row">
          {box.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
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

function CrtSurvey() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes((prevBoxes) => [
      ...prevBoxes,
      { question: "", answerType: "단답형", answers: [""] }
    ]);
  };

  const deleteBox = (index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes.splice(index, 1);
      return newBoxes;
    });
  };

  const handleQuestionChange = (index, event) => {
    const newBoxes = [...boxes];
    newBoxes[index].question = event.target.value;
    setBoxes(newBoxes);
  };

  const handleAnswerTypeChange = (index, event) => {
    const newBoxes = [...boxes];
    newBoxes[index].answerType = event.target.value;

    if (event.target.value === "체크박스") {
      // Reset answers when answer type changes
      newBoxes[index].answers = [{ text: "", isChecked: false }];
    } else {
      newBoxes[index].answers = [""]; // Reset answers to a single empty string for other answer types
    }

    setBoxes(newBoxes);
  };

  const handleSingleChoiceAnswerChange = (index, answerIndex) => {
    const newBoxes = [...boxes];
    newBoxes[index].selectedAnswerIndex = answerIndex;
    setBoxes(newBoxes);
  };

  const handleAnswerChange = (index, answerIndex, event) => {
    const newBoxes = [...boxes];
    newBoxes[index].answers[answerIndex] = event.target.value;
    setBoxes(newBoxes);
  };

  const handleCheckboxAnswerChange = (index, answerIndex) => {
    const newBoxes = [...boxes];
    const isChecked = newBoxes[index].answers[answerIndex].isChecked;
    newBoxes[index].answers[answerIndex].isChecked = !isChecked;
    setBoxes(newBoxes);
  };

  const addAnswer = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index].answers.push({ text: "", isChecked: false });
    setBoxes(newBoxes);
  };

  const deleteAnswer = (index, answerIndex) => {
    const newBoxes = [...boxes];
    newBoxes[index].answers.splice(answerIndex, 1);
    setBoxes(newBoxes);
  };

  return (
    <div className="survey">
      <h1>Title</h1>
      {boxes.map((box, index) => (
        <SurveyBox
          key={index}
          box={box}
          index={index}
          handleQuestionChange={handleQuestionChange}
          handleAnswerTypeChange={handleAnswerTypeChange}
          handleSingleChoiceAnswerChange={handleSingleChoiceAnswerChange}
          handleAnswerChange={handleAnswerChange}
          handleCheckboxAnswerChange={handleCheckboxAnswerChange}
          deleteBox={deleteBox}
          addAnswer={addAnswer}
          deleteAnswer={deleteAnswer}
        />
      ))}
      <div className="buttons">
        <button onClick={addBox}>추가</button>
        <button>삭제</button>
        <button>임시저장</button>
        <button>저장</button>
      </div>
    </div>
  );
}

export default CrtSurvey;
