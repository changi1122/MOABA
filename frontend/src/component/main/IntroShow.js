import React from "react";

import TextSpin from "./TextSpin";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import "./IntroShowStyle.css";

function IntroShow(){

    return(
        <div className="leftshow center">

            <p className="left-text">링크 <span className="white-blue-color">하나로</span></p>
            <TextSpin
                text1="빠르게"
                text2="간편하게"
                text3="단순하게"
            />

            <Splide
                aria-label="Functions"
                options={{
                    rewind : true,
                    width: '400px'
                }}>
                <SplideSlide>
                    <div className='slide'>
                        <img src="/images/intro/slide1.png" alt=""/>
                        <div className='text-area'>
                            <p>설문 폼 만들기</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slide'>
                        <img src="/images/intro/slide2.png" alt=""/>
                        <div className='text-area'>
                            <p>카카오톡 공유하기</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slide'>
                        <img src="/images/intro/slide3.png" alt=""/>
                        <div className='text-area'>
                            <p>설문결과 집계</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slide'>
                        <img src="/images/intro/slide4.png" alt=""/>
                        <div className='text-area'>
                            <p>인원 맞춤 장소 탐색</p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );

}

export default IntroShow;