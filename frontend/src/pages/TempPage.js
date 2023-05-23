import React from "react";
import { useParams } from "react-router-dom";

function TempPage(props){

    var {id}= useParams();

    return(
        <div>{id}</div>
    )
}

export default TempPage;