import React from "react";
import "./FooterStyle.css";

function Footer(){

    return(
        <div className="Footer">
            
            <p>오늘 모일 사람을</p>
            <h4>모아봐</h4>

            <hr />

            <p>Team <span>Cheongju Mate</span></p>
            <p>Members 
                <span>Seongwook Kim</span> 
                <span>Woochang Lee</span>
                <span>Wonbae Jae</span>
            </p>
        </div>
    );
}

export default Footer;