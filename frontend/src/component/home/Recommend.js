import React from "react";
import ItemBox from "./ItemBox";
import TemplateSample from "../../data/TemplateSample";
import { Link } from "react-router-dom";

import "./RecommendStyle.css";
import { useSelector } from "react-redux";

function Recommend(props){

    const {search} =useSelector(state => state.counter);

    console.log(TemplateSample);

    const Data = TemplateSample.Data;

    console.log("Data", Data);


    function repeatTitle(){
        let arr =[];
        let limit = Data.length;

        if(props.Limit){
            limit = 6;
        }

        for(var i=0; i<limit; i++){
            console.log(Data[i]["category1"]);
            console.log(process.env.PUBLIC_URL + "./images/ee.jpg")

            if(limit!= 6){
                var title  = Data[i]["title"];
                var user  = Data[i]["user"];
                console.log("title ", title, "user ", user, "1 ", title.includes(search), " 2 ", user.includes(search));
                console.log("this is ", search);
                if( !title.includes(search) && !user.includes(search)){
                    continue;
                }
            }

            arr.push(
                <Link to={`/save/page/answer/${Data[i]["id"]}`}>
                    <ItemBox
                        key={i}
                        category1={Data[i]["category1"]}
                        category2={Data[i]["category2"]}
                        category3={Data[i]["category3"]}
                        title={Data[i]["title"]}
                        date={Data[i]["date"]}
                        user={Data[i]["user"]}
                        img={`http://localhost:3000/images/${Data[i]["img"]}`}
                    />
                </Link>
            );
        
        }

        return arr;
    }


    return(
        <div className="Rcmnd-active">
            {repeatTitle()}
        </div>
    );
}

export default Recommend;