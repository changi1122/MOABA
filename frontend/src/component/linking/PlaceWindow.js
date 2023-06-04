import React, { useEffect, useState } from "react";
import './PlaceWindow.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

export default function PlaceWindow(props){
    
    const [address, setAddress] = useState("");
    const [tel, setTel] = useState("");
    const [tags, setTags] = useState([]);
    const [navermap, setNavermap] = useState("");
    const [image, setImage] = useState([]);
    
    const getData = async (name) => {
        console.log(name);
        const response = await fetch(`/data/place/${encodeURIComponent(name)}.json`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        );
        return response.json();
    }

    const loadMap = async (name) => {
        const data = await getData(name);
        if (!data) return;

        setAddress(data.address);
        setTel(data.tel);
        setTags(data.tags);
        setNavermap(data.navermap);
        setImage(data.image);

        if (window.kakao) {
            const kakao = window.kakao;

            const mapContainer = document.getElementById('map'),
            mapOption = { 
                center: new kakao.maps.LatLng(data.lat, data.lng),
                level: 2
            };
        
            const map = new kakao.maps.Map(mapContainer, mapOption);
        
            const markerPosition  = new kakao.maps.LatLng(data.lat, data.lng); 
        
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
        
            marker.setMap(map);
        }
    }

    useEffect(() => {
        loadMap(props.name);
    }, [props.name]);

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
                    {   image && image.map((img) => (
                            <SplideSlide key={img}>
                                <div className="place">
                                    <img src={img} alt="Image 1"/>
                                </div>
                            </SplideSlide>
                    
                        ))
                    }
                    </Splide>
                    <div className='info'>
                        <h1>{ props.name }</h1>
                        <div className='metadata'>
                            <p><span className="material-symbols-outlined">location_on</span> { address }</p>
                            <p><span className="material-symbols-outlined">smartphone</span> { tel }</p>
                        </div>
                        <ul className='category'>
                        {   tags && tags.map((tag) => (
                            <li>#{tag}</li>
                            ))
                        }
                        </ul>
                        <div id='map' class='map'>
                        </div>
                    </div>
                </div>
                <div className='window-action'>
                    <a className='button' href={navermap} target='_blank'>네이버 지도에서 열기</a>
                    <a className='button active' href={'tel:' + tel} target='_blank'>예약하기</a>
                </div>
            </div>
        </div>
    );
}
