import React from "react";
import { useParams } from "react-router-dom";

export default function TempPage(props){

    var {id}= useParams();

    return(
        <div>{id}</div>
    )
}
