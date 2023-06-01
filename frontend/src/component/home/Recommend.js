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
                user = "Sdd"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                user = "sdf"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                user="Sori98"
                img = {img}
            />

            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                user="changi1122"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                user="Jae Won Bae"
                img = {img}
            />
            <ItemBox
                category1="행사"
                category2="5인"
                category3="대학"
                title = "충북대학교 축제"
                date = "2023.10.3 ~ 10.6"
                user="kim"
                img = {img}
            />
            
        </div>
    );
}

export default Recommend;