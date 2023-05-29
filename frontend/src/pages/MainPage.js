import React from "react";

import Sidebar from '../component/Sidebar';
import IntroShow from '../component/main/IntroShow';
import AccessShow from '../component/main/AccessShow';

function MainPage(){

    return (
        <div className="horazion">
            <Sidebar 
                width={"100%"}
                height="100%"  
                position="center" 
                content={IntroShow()} 
                isShow={false}
            />
            <Sidebar 
                width={"400px"}
                height="100%"
                color="white-blue"
                position="center"
                content={AccessShow()}
                isShow={false}
            />

        </div>
    );
}

export default MainPage;