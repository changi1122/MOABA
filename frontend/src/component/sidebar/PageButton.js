import React from "react";

import PageMoveB from "./PageMoveB";

import "./PageButtonStyle.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StateCreate, StateLinking, StateProfile, StateSave, StateTemp, makeToNUll, setlogout } from "../../reducers/counter";


function PageButton(){
    var navigate = useNavigate();

    const dispacth = useDispatch();


    function Logout(){
        dispacth(makeToNUll());
        dispacth(setlogout());
        navigate('/');
    }


    function MoveToMyPage(){
        dispacth(makeToNUll());
        dispacth(StateProfile());
        navigate('/user');
    }

    function MoveToCratePage(){
        dispacth(makeToNUll());
        dispacth(StateCreate());
        navigate('/create');
    }

    function MoveToLinkingPage(){
        dispacth(makeToNUll());
        dispacth(StateLinking());
        navigate('/linking');
    }

    function MoveToTempPage(){
        dispacth(makeToNUll());
        dispacth(StateTemp());
        navigate('/temp/page/1');
    }

    function MoveToTemplatePage(){
        dispacth(StateSave());
        navigate('/save/page/1');
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
                url={MoveToTempPage}
                icon="folder"
            />

            <PageMoveB
                Bstyle="basic-style"
                content="Save"
                url={MoveToTemplatePage}
                icon="folder"
            />
            
            <button className="button-add" onClick={Logout} > 
                <span className="material-symbols-outlined">
                    logout
                </span>
            </button>

        </div>
    );
}

export default PageButton;