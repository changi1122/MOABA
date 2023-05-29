import React from "react";
import { useParams } from "react-router";

function SaveTemp(){
    const { id } = useParams();

    console.log(id);


    return(
        <div>
            {id}
        </div>
    );

}

export default SaveTemp;