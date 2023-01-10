import React from 'react';
import './HomePage.css'
function HomePage() {
    return (
        <div className='HomePage'>
            <div className='HomePageVideo'>
            <video autoPlay loop preload muted playsinline >
                <source type='video/mp4' src='https://www.volunteerworld.com/static/banner.mp4' className='video'/>
            </video>
            {/* <button className='GetStartedBtn'>Get Started</button> */}
            </div>

            <div className='ScrollingImgs'>

            </div>
            
        </div>
    );
}

export default HomePage;