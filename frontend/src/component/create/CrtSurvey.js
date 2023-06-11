import React, { useEffect, useState } from "react";
import "./CrtSurveyStyle.css";
import SurveyBox from "./SurveyBox";

function CrtSurvey() {
  const [boxes, setBoxes] = useState([{ question: "", answerType: "단답형", answers: [""] }]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showSubCategoryPopup, setShowSubCategoryPopup] = useState(false);  

  const [title, Settitle] = useState("");
  const [text, setText] = useState('');

  const [duedate, setDueDate] = useState("");
  const [enddate, setEndDate] = useState("");

  const [data, setData] = useState([]);

  const handleDueDate = (event)=>{
    console.log(event.target.value);
    setDueDate(event.target.value);
  }

  const handleEndDate = (event)=>{
    console.log(event.target.value);
    setEndDate(event.target.value);
  }

  const handleChange = (event) => {
    setText(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById('textarea');
    textarea.style.height = '10px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(()=>{
    console.log(boxes);
  }, [boxes])

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
    if (boxes[index].answerType === "체크박스")
      newBoxes[index].answers.push({ text: "", isChecked: false });
    else
      newBoxes[index].answers.push("");
    setBoxes(newBoxes);
  };

  const deleteAnswer = (index, answerIndex) => {
    const newBoxes = [...boxes];
    newBoxes[index].answers.splice(answerIndex, 1);
    setBoxes(newBoxes);
  };

  const handleTitleChange = (event) => {
    // Handle title input change
    Settitle(event.target.value);
  };

  useEffect(()=>{
    console.log(title);
  }, [title]);



  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCategoryPopup = () => {
    setShowCategoryPopup(true);
    setShowSubCategoryPopup(false);
  };

  const handleSubCategoryPopup = () => {
    setShowSubCategoryPopup(true);
  };

  const handleCategorySelect = (category) => {
    if(!categories.includes(category)){
      setCategories((prevCategories) => [...prevCategories, category]);
      setCategory("");
    };
  };

  const deleteCategory = (index) => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories.splice(index, 1);
      return newCategories;
    });
  };

  const PrintInfo = async ()=>{
    const first = [
      {
        "title":title,
        "content":text
      },
      {
        "type" : categories
      },
      {
        "dueDate" : duedate,
        "endDate" : enddate
      }
    ];
    setData(first);

    for(var i=0; i<boxes.length; i++){
      console.log(boxes[i]);
      const t = boxes[i];
      console.log(t);
      first.push(t)
    }

    console.log(first);

    setData(first);
  };

  useEffect(()=>{
    console.log(data)
    SendData();
  }, [data])

  const SendData = async ()=>{

    await fetch("/api/save",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result=>{
      console.log("result", result);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="right-content">
      <div className="survey">
        <input
          type="text"
          placeholder="제목"
          value={title}
          style={{ fontSize: "30px", backgroundColor: "transparent", width: "100%", borderBottom: '1px solid #ccc', paddingBottom: '8px' }}
          onChange={handleTitleChange}
        />

        <div className="survey-category-row" style={{ alignItems: 'center' }}>
          <label className="survey-category-label">모임 유형</label>
          <div className="survey-category-input">
          {categories.map((category, index) => (
            <div className='tag' key={index}>
              {category}
              <span
                className="material-icons"
                onClick={() => deleteCategory(index)}
              >
                close
              </span>
            </div>
          ))}
          <button className="survey-category-add-button" onClick={handleCategoryPopup}>
            추가
          </button>
          {showCategoryPopup && (
            <div className="survey-category-popup" id="survey-category-box">
              <div style={{ textAlign: 'right' }}>
                <button className="survey-category-close-category-button" style={{}} onClick={() => setShowCategoryPopup(false)}>닫기</button>
              </div>
              <h2>그룹 성격</h2>
              <button className='tag' onClick={() => handleCategorySelect("친구")}>친구</button>
              <button className='tag' onClick={() => handleCategorySelect("직장")}>직장</button>
              <button className='tag' onClick={() => handleCategorySelect("동아리")}>동아리</button>
              <button className='tag' onClick={() => handleCategorySelect("학교")}>학교</button>
              <button className='tag' onClick={() => handleCategorySelect("가족")}>가족</button>

              <h2>모임 성격</h2>
              <button className='tag' onClick={() => handleCategorySelect("회식")}>회식</button>
              <button className='tag' onClick={() => handleCategorySelect("친목")}>친목</button>
              <button className='tag' onClick={() => handleCategorySelect("번개")}>번개</button>
              <button className='tag' onClick={() => handleCategorySelect("식사")}>식사</button>
              <button className='tag' onClick={() => handleCategorySelect("스터디")}>스터디</button>
            </div>
          )}
        </div>
        </div>

    
        <textarea
          id="textarea"
          className="Survey-content"
          onChange={handleChange}
          value={text}
          placeholder="본문"
        />
      

        <div className="survey-category-date-time">
          <label>모임 예정일시</label>
          <input type="datetime-local" onChange={handleDueDate}/>
        </div>

        <div className="survey-category-date-time">
          <label>응답 종료일시</label>
          <input type="datetime-local" onChange={handleEndDate} />
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
        <div className="survey-buttons">
          <button onClick={addBox}>질문 추가</button>
          <button>삭제</button>
          <button>임시저장</button>
          <button onClick={PrintInfo} >저장</button>
        </div>
      </div>
    </div>
  );
}

export default CrtSurvey;
