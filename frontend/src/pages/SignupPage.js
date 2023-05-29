import React from "react";

import Sidebar from '../component/Sidebar';
import IntroShow from '../component/main/IntroShow';
import SignupShow from '../component/main/SignupShow';

export default function SignupPage(){

    return (
        <div className="horazion">
            <Sidebar 
                width={"100%"}
                height="100%"  
                position="center" 
                content={IntroShow()} 
            />
            <Sidebar 
                width={"400px"}
                height="100%"
                color="white-blue"
                position="center"
                content={SignupShow()}
            />

        </div>
    );
}
