import React from "react";
import './PlaceWindow.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

export default function PlaceWindow(props){

    return (
        <div className='place-window-container'>
            <a className='close-button' onClick={() => { props.setIsWindowOpened(false) }}>
                <span className="material-symbols-outlined">close</span>
            </a>
            <div className='window-flex'>
                <div className='placeinfo'>
                    <Splide
                        aria-label="Recommended Places"
                        options={{
                            rewind : true,
                        }}>
                        <SplideSlide>
                            <div className="place">
                                <img src="https://picsum.photos/id/237/200/100" alt="Image 1"/>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="place">
                                <img src="https://picsum.photos/id/243/200/100" alt="Image 1"/>
                            </div>
                        </SplideSlide>
                    </Splide>
                    <div className='info'>
                        <h1>청춘튀겨</h1>
                        <div className='metadata'>
                            <p><span className="material-symbols-outlined">location_on</span> 충청북도 청주시 서원구 충대로 1</p>
                            <p><span className="material-symbols-outlined">smartphone</span> 043-261-2222</p>
                        </div>
                        <ul className='category'>
                            <li>#동아리</li>
                            <li>#친목</li>
                            <li>#5인</li>
                        </ul>
                        <div className='map'>
                            지도
                        </div>
                    </div>
                </div>
                <div className='window-action'>
                    <a className='button'>카카오맵에서 열기</a>
                    <a className='button active'>예약하기</a>
                </div>
            </div>
        </div>
    );
}
