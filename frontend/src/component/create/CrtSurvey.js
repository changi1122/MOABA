import React, { useState } from "react";
import "./CrtSurveyStyle.css";
import SurveyBox from "./SurveyBox";

function CrtSurvey() {
  const [boxes, setBoxes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);

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

  const handleTitleChange = (event) => {
    // Handle title input change
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCategoryPopup = () => {
    setShowCategoryPopup(!showCategoryPopup);
  };

  const handleCategorySelect = () => {
    if (category.trim() !== "") {
      setCategories((prevCategories) => [...prevCategories, category]);
      setCategory("");
      setShowCategoryPopup(false);
    }
  };

  const deleteCategory = (index) => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories.splice(index, 1);
      return newCategories;
    });
  };

  return (
    <div className="right-content">
      <div className="survey">
        <input
          type="text"
          placeholder="Title"
          style={{ fontSize: "30px", backgroundColor: "transparent" }}
          onChange={handleTitleChange}
        />
        <hr style={{ borderStyle: "dashed" }} />

        <div className="survey-category-row">
          <label className="survey-category-label">Category</label>
        </div>
        <hr
          style={{
            borderStyle: "solid",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        />
        <div className="survey-category-input">
          {categories.map((category, index) => (
            <div key={index}>
              {category}
              <span
                className="material-icons"
                onClick={() => deleteCategory(index)}
              >
                delete
              </span>
            </div>
          ))}
          <button className="survey-category-add-button" onClick={handleCategoryPopup}>
            +
          </button>
          {showCategoryPopup && (
            <div className="survey-category-popup">
              <input
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={handleCategoryChange}
              />
              <button onClick={handleCategorySelect}>Add</button>
            </div>
          )}
        </div>

        <div className="survey-category-date-time">
          <label>Meeting Date:</label>
          <input type="date" />
          <label>Time:</label>
          <input type="time" />
        </div>

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

        <div className="survey-category-date-time">
          <label>Due Date:</label>
          <input type="date"/>
          <label>Time:</label>
          <input type="time"/>
        </div>
        <div className="survey-buttons">
          <button onClick={addBox}>추가</button>
          <span className="material-symbols-outlined survey-icon-color survey-icon-font-M">
            delete_forever
          </span>
          <button>임시저장</button>
          <button>저장</button>
        </div>
      </div>
    </div>
  );
}

export default CrtSurvey;
