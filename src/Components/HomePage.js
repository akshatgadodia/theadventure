import React ,{ Suspense } from 'react'
import { useState} from 'react';
import Video1 from '../Resources/video1.mp4';
import Video2 from '../Resources/video2.mp4';
import Video3 from '../Resources/video3.mp4';
import Video4 from '../Resources/video4.mp4';
import Video5 from '../Resources/video5.mp4';
import '../CSS/HomePageCSS.css';


const HomePage = () => {
    const [backgroundVideoSource, setBackgroundVideoSource] = useState(Video1);
    const handleOnClick1 = () => {setBackgroundVideoSource(Video1);}
    const handleOnClick2 = () => {setBackgroundVideoSource(Video2);}
    const handleOnClick3 = () => {setBackgroundVideoSource(Video3);}
    const handleOnClick4 = () => {setBackgroundVideoSource(Video4);}
    const handleOnClick5 = () => {setBackgroundVideoSource(Video5);}

  return (
    <div className='home-page-main-div'>
        <video key={backgroundVideoSource} loop autoPlay muted> <source src={backgroundVideoSource} type="video/mp4"/> </video>
        <div className="home-page-main-div-overlay"></div>
        <div className='home-page-main-div-content'>
            <h1>ADVENTURE IS WORTHWHILE</h1>
            <h3>Discover New Places With Us, Adventure Awaits</h3>
            <div className="home-page-main-div-content-selector">
                <button className={ backgroundVideoSource===Video1 ? "home-page-main-div-content-selector-btn-selected" : ""}
                    onClick={handleOnClick1}></button>
                <button className={ backgroundVideoSource===Video2 ? "home-page-main-div-content-selector-btn-selected" : ""}
                    onClick={handleOnClick2}></button>
                <button className={ backgroundVideoSource===Video3 ? "home-page-main-div-content-selector-btn-selected" : ""}
                    onClick={handleOnClick3}></button>
                <button className={ backgroundVideoSource===Video4 ? "home-page-main-div-content-selector-btn-selected" : ""}
                    onClick={handleOnClick4}></button>
                <button className={ backgroundVideoSource===Video5 ? "home-page-main-div-content-selector-btn-selected" : ""}
                    onClick={handleOnClick5}></button>
            </div>
        </div>
    </div>
  )
}

export default HomePage