import React from "react";
import PersonalInfo from "./footer/PersonalInfo";
import "./FooterStyle.css";

function Footer(){

    return(
        <div className="Footer">
            <div className="Footer-body">
                <p id="Footer-title">오늘 만날 사람을</p>
                <p id="Footer-title">모아봐</p>

                <div className="Footer-body-content">
                    <div className="Footer-BC">
                        <div>Team <br /><span>Cheongju Mate</span></div>
                    </div>
                    
                    <div className="Footer-BC">
                        <div>Members 
                            <div className="Members-user">
                                <PersonalInfo
                                    img={"http://localhost:3000/images/user.jpg"}
                                    user="Seongwook Kim"
                                />
                                <PersonalInfo
                                    img={"http://localhost:3000/images/user.jpg"}
                                    user="Woochang Lee"
                                />
                                <PersonalInfo
                                    img={"http://localhost:3000/images/user.jpg"}
                                    user="JaeWon Bae"
                                />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;