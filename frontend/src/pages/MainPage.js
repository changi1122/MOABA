import React from "react";

import Sidebar from '../component/Sidebar';
import IntroShow from '../component/main/IntroShow';
import AccessShow from '../component/main/AccessShow';
import IntroInfo from '../component/main/IntroInfo';

import "./MainPageStyle.css";

function MainPage(){

    return (
        <div className="horazion">
            <div className="MainPage-Style">
                <Sidebar 
                    width={"100%"}
                    height={"100vh"}
                    position="center" 
                    content={IntroShow()} 
                    isShow={false}
                />

                <IntroInfo />
            </div>
            <Sidebar 
                width={"300px"}
                color="white-blue"
                fix="fixed"
                position="center"
                content={AccessShow()}
                isShow={false}
            />

        </div>
    );
}

export default MainPage;