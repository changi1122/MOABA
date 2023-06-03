import React from "react";

function SqlideSlideCont(props){
    return(
        <div className="place">
            <img src={props.img} alt="Image 1"/>

            <div className='text-area'>
                <p>{props.storeN}</p>
            </div>

            <div className='button-area'>
                <button onClick={() => { props.action(props.storeN) }}>{props.BtnStr}</button>
            </div>
        </div>
    );
}

export default SqlideSlideCont;