import React from "react";
import ItemBox from "./ItemBox";
import "./RecommendStyle.css";

import img from "../../images/ee.jpg";

function Recommend(){
    return(
        <div className="Rcmnd-active">
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />

            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                time = "09:00 ~ 15:30"
                img = {img}
            />
            
        </div>
    );
}

export default Recommend;