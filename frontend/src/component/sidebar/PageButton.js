import React, { useState } from "react";

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

    function TT(){

    }

    /*
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
    } */

    return(
        <div className="Menubar">
            <PageMoveB
                Bstyle="basic-style"
                content="Profile"
                url={MoveToMyPage}
                icon="person"
            />

            <PageMoveB
                Bstyle="basic-style"
                content="Create"
                url={MoveToCratePage}
                icon="group_add"
            />


            <PageMoveB
                Bstyle="basic-style"
                content="Linking"
                url={MoveToLinkingPage}
                icon="share"
            />

            <PageMoveB
                Bstyle="basic-style"
                content="Temp"
                url={TT}
                icon="folder"
                openicon="folder_open"
            />

            <PageMoveB
                Bstyle="basic-style"
                content="Save"
                url={TT}
                icon="folder"
                openicon="folder_open"
            />
            
            <button className="button-add"> + </button>

        </div>
    );
}

export default PageButton;