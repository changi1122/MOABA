import React, { useState, useEffect } from 'react';

import "react-day-picker/dist/style.css";
import "./LinkingItemContent.css"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import PlaceWindow from './PlaceWindow';
import SqlideSlideCont from './SqlideSlideCont';
import ResultBox from './ResultBox';


import LinkingItem from "../../data/Linkingitem.json";
import { useParams } from 'react-router-dom';

function LinkingItemContent() {

    const [result, setResult] = useState({});
    const [isWindowOpened, setIsWindowOpened] = useState(false);
    const [name, setName] = useState("주목원");

    const { id } = useParams();

    const [capacity, setCapacity] = useState(10);


    useEffect(() => {
        GetQuestion();
    }, []);


    const GetQuestion = async () =>{

        const data = {
            "qid" : id
        }

        console.log(data);

        await fetch("/api/get/header", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result=>{
            console.log("sdf : ", result)
            for (const question of result.questions) {
                if(question.answerType!=="단답형"){
                    question.resultTable = [["", "응답 수"]];
                }else{
                    question.resultTable =[];
                }
                for (const map of question.result) {
                    question.resultTable.push([Object.keys(map)[0], Object.values(map)[0]]);
                }
            }
            setResult(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    let linkingItem = LinkingItem.Data;

    function openPlaceWindow(name) {
        setName(name);
        setIsWindowOpened(true);
    }

    function MakeShowItem(){
        let arr= [];

        // 셔플
        linkingItem.sort(() => Math.random() - 0.5);
        
        for(let i = 0; i < linkingItem.length; i++){
            if (capacity <= linkingItem[i].max) {
                arr.push(
                    <SplideSlide key={i}>
                        <SqlideSlideCont
                            img =  {linkingItem[i]["img"]}
                            storeN = {linkingItem[i]["storeN"]}
                            BtnStr = {linkingItem[i]["BtnStr"]}
                            action = {openPlaceWindow}
                        />
                    </SplideSlide>
                );
            }
        }

        return arr;
    }

    return (
        <div className='content'>
            <form className='linking-form'>
                <h1>{result.name}</h1>
                <div className="survey-category-row" style={{ alignItems: 'center' }}>
                    <div className="survey-category-input">
                        {result.categories && result.categories.map((category, index) => (
                        <div className='tag' key={index}>
                            {category}
                        </div>
                        ))}
                    </div>
                </div>
                <div className='metadata' style={{ marginBottom: '20px' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>모임 예정일시</td>
                                <td>{result.meetingDate}</td>
                            </tr>
                            <tr>
                                <td>응답 종료일시</td>
                                <td>{result.dueDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='question'>
                    {   result && result.questions && result.questions.map((q, index) => (
                        <ResultBox
                            index={index}
                            box={q}
                        />
                    ))
                    }
                </div>
            </form>

            <div className='place-recommend'>
                <h1 id='place'>
                    <input className='capacity' type='number' value={capacity}
                    min='2' max='300' onChange={(e) => { setCapacity(e.target.value); }} />
                    명 장소 추천
                </h1>
                <Splide
                    aria-label="Recommended Places"
                    options={{
                        perPage: 3,
                        rewind : true,
                    }}>
                    
                    {
                        MakeShowItem()
                    }
                </Splide>
            </div>
            {
                isWindowOpened && (
                    <>
                        <div style={{
                            position:'fixed',
                            backgroundColor:'rgba(0,0,0,0.2)',
                            top:'0',
                            left:'0',
                            width:'100%',
                            height:'100vh'
                            }}></div>
                        <div className='place-window'>
                            <PlaceWindow setIsWindowOpened={setIsWindowOpened} name={name}/>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default LinkingItemContent;