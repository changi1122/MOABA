import React from "react";

function HoraizonBar({total, range, title}){

    var len = (400/parseInt(total)) * parseInt(range);
    var par = parseInt(range)/parseInt(total)*100;
    par = Math.round(par);


    return(
        <div className="bar">
            <p>{title}</p>
            <div className="bar-background">
                <div className="bar-range" style={{width:len+"px"}}>
                    <p>{(par)+"%"}</p>
                </div>
            </div>
        </div>
    );
}

export default HoraizonBar;