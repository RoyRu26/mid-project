import React from 'react';
import './HomePage.css'
import { Typography,Button } from '@mui/material';
import {NavLink} from 'react-router-dom'
function HomePage() {
    return (
            <div className='HomePage'>
                <div className='blackDiv'></div>
                <div className='content'><Typography color='primary' fontSize='8vw' fontWeight='large'>Let's give back to our nation</Typography>
               <NavLink className='AboutNavLink' to='/About'><Button color='secondary' variant="contained" disableElevation>Get started</Button></NavLink> 
                </div>
                <video autoPlay loop muted>
                    <source type='video/mp4' src='https://www.volunteerworld.com/static/banner.mp4' />
                </video>
            </div>
    );
}

export default HomePage;