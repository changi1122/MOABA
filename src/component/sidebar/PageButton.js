import React, { useState, useEffect } from "react";

import PageMoveB from "./PageMoveB";

import "./PageButtonStyle.css"
import { useNavigate } from "react-router-dom";


function PageButton(){
    var navigate = useNavigate();

    const [Blink, SetBlink] = useState([]);


    function MoveToMyPage(){
        navigate('/user');
    }

    function MoveToCratePage(){
        navigate('/create');
    }

    function MoveToLinkingPage(){
        navigate('/linking');
    }

    function MoveToTempPage(arg){
        var str = '/page/'+arg;
        console.log(str)
        navigate(str);
    }


    function MakeNewButton(){

        var arr = []
        var len = Blink.length;
        console.log("len =" + len);
        arr.push(
            <PageMoveB
                style="basic-style"
                animation="show-animation"
                content={len}
                data="1"
            />
        )

        arr.push(
            <PageMoveB
                style="basic-style"
                animation="show-animation"
                content={1}
                data="2"
            />
        )

        arr.push(
            <PageMoveB
                style="basic-style"
                animation="show-animation"
                content={2}
                data="3"
            />
        )

        SetBlink(arr);

        console.log(arr);

        // 각 설문조사 페이지를 저장하는 table에서 각 페이지 ID를 url로 전송
        // /temp/page/{number}를 만들어서 전송
    }

    return(
        <div className="Menubar">

            <PageMoveB
                style="basic-style"
                content="My Page"
                url={MoveToMyPage}
            />

            <PageMoveB
                style="basic-style"
                content="Create"
                url={MoveToCratePage}
            />


            <PageMoveB
                style="basic-style"
                content="Linking"
                url={MoveToLinkingPage}
            />

            {Blink}

            <button className="button-add" onClick={MakeNewButton}> + </button>

        </div>
    );
}

export default PageButton;