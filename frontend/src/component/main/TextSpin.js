import React from "react";

import "./TextSpinStyle.css";

function TextSpin( {text1, text2, text3}){
    
    return(
        <div className="Spinner">
            <p>&#123;&nbsp;&nbsp;&nbsp;&nbsp;</p>

            <div className="Spinner-body">
                <h1 className="Spinner-data h1">
                    <span>{text1}</span>
                </h1>

                <h1 className="Spinner-data h2">
                    <span>{text2}</span>
                </h1>

                <h1 className="Spinner-data h3">
                    <span>{text3}</span>
                </h1>
            </div>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
        </div>
    );
}

export default TextSpin;