import React from "react";

function HorizontalBar({total, range, title}){

    var par = parseInt(range)/parseInt(total)*100;
    par = Math.round(par);


    return(
        <div className="bar">
            <p>{title}</p>
            <div className="bar-background">
                <div className="bar-range" style={{width:par+"%"}}>
                    <p>{(par)+"%"}</p>
                </div>
            </div>
        </div>
    );
}

export default HorizontalBar;