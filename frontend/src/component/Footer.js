import React, { useEffect } from "react";
import PersonalInfo from "./footer/PersonalInfo";
import IconHorazion from "./IconHorazion";
import "./FooterStyle.css";

function Footer(){

    useEffect(()=>{
        loadMap();
    }, []);

    const loadMap = async () => {
        if (window.kakao) {
            const kakao = window.kakao;

            const mapContainer = document.getElementById('map'),
            mapOption = { 
                center: new kakao.maps.LatLng(36.625664097048656, 127.4543895026495),
                level: 3
            };
        
            const map = new kakao.maps.Map(mapContainer, mapOption);
        
            const markerPosition  = new kakao.maps.LatLng(36.625664097048656, 127.4543895026495); 
        
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            
            map.setDraggable(false);
            map.setZoomable(false);

            marker.setMap(map);

        }
    }

    return(
        <div className="Footer">
            <div>
                <div className="Footer-body">
                    <p id="Footer-title">오늘 만날 사람을</p>
                    <span id="Footer-title">모아봐</span>

                    <div className="Footer-body-content">
                        <div className="Footer-BC Footer-BC-margin">
                            <div>Team <br /><span>Cheongju Mate</span></div>
                        </div>
                        
                        <div className="Footer-BC">
                            <div>Members 
                                <div className="Members-user">
                                    <PersonalInfo
                                        img={"http://localhost:3000/images/user.jpg"}
                                        user="Seongwook Kim"
                                        className = "personal-member"
                                        imgN = "Members-img"
                                        isLink={0}
                                    />
                                    <PersonalInfo
                                        img={"http://localhost:3000/images/user.jpg"}
                                        user="Woochang Lee"
                                        className = "personal-member"
                                        imgN = "Members-img"
                                        isLink={0}
                                    />
                                    <PersonalInfo
                                        img={"http://localhost:3000/images/user.jpg"}
                                        user="JaeWon Bae"
                                        className = "personal-member"
                                        imgN = "Members-img"
                                        isLink={0}
                                    />
                                </div>
                            </div>    
                        </div>

                    </div>
                </div>

                <div className="Footer-conect">
                    <PersonalInfo 
                        img={"http://localhost:3000/images/github.png"}
                        user="https://github.com/changi1122/MOABA"
                        className = "github-Info"
                        imgN = "github-img"
                        isLink={1}
                    />

                    <div className="Footer-None"></div>

                    <IconHorazion
                        icon = "call"
                        content ="043-271-2737"
                        classN = "material-conect"
                        CtntStyle = "conect-context"
                    />

                    <IconHorazion
                        icon = "map"
                        content ="충북대학교 소프트웨어학과 S4-1"
                        classN = "material-conect"
                        CtntStyle = "conect-context"
                    />

                    <IconHorazion
                        icon = "mail"
                        content ="MOABA@gmail.com"
                        classN = "material-conect"
                        CtntStyle = "conect-context"
                    />
                </div>

                <div className="Footer-map" id="map">
                    
                </div>

            </div>
        </div>
    );
}

export default Footer;