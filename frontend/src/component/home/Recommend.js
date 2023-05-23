import React from "react";
import ItemBox from "./ItemBox";
import "./RecommendStyle.css";

function Recommend(){
    return(
        <div className="Rcmnd-active">
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
        </div>
    );
}

export default Recommend;