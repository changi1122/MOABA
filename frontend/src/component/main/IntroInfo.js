import React from "react";

import "./IntroInfo.css";

export default function IntroInfo(){

    return (
        <div className="introinfo">
            <div>
                <h2><span className='accent'>모임</span> 어떻게 모으시나요? 🤔</h2>
            </div>
            <div className='normal'>
                <div>
                    <img src='/images/intro/normal1.jpg' alt=''/>
                    <p>사전 희망일 조사</p>
                </div>
                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
                <div>
                    <img src='/images/intro/normal2.jpg' alt=''/>
                    <p>참가 불참 여부 조사</p>
                </div>
                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
                <div>
                    <img src='/images/intro/normal3.jpg' alt=''/>
                    <p>인원에 맞는 장소 탐색</p>
                </div>
            </div>
            <div className='moaba'>
                <h2 style={{ textAlign:'right' }}>🥳 이제 <span className='accent'>링크</span> 한번에 모아보세요 </h2>
                <div className='moabaFlex'>
                    <div>
                        <img src='/images/intro/moaba1.jpg' alt=''/>
                        <p>카카오톡 공유</p>
                    </div>
                    <div className='color'>
                        <p>설문 폼 만들기</p>
                    </div>
                    <div className='color'>
                        <p>설문결과 집계</p>
                    </div>
                    <div className='color'>
                        <p>맞춤 장소 탐색</p>
                    </div>
                </div>
            </div>
            <div className='developer'>
                <h2 style={{ fontSize: '24px', textAlign: 'center' }}>만든 사람들 😎</h2>
                <div className='dev'>
                    <div className="member-show">
                        <img  src={process.env.PUBLIC_URL + '/images/member/Kim.png'} alt="" />
                        <a href='https://github.com/sori9899' target='_blank'><p>김성욱</p></a>
                    </div>
                    <div className="member-show">
                        <img src={process.env.PUBLIC_URL + '/images/member/Lee.jpg'} alt="" />
                        <a href='https://github.com/changi1122' target='_blank'><p>이우창</p></a>
                    </div>
                    <div className="member-show">
                        <img src={process.env.PUBLIC_URL + '/images/member/Bae.png'} alt="" />
                        <a href='https://github.com/JaewonB37' target='_blank'><p>배재원</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
