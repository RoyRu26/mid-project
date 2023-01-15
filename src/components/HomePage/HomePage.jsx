import React, { useContext, useEffect } from 'react';
import './HomePage.css'
import { Typography, Button, ImageList, ImageListItem } from '@mui/material';
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/system';
import { actList } from '../../App';
function HomePage() {
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            cols: 2,
        },
    ];
    return (
        <div className='HomePage'>
            <div className='blackDiv'></div>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <div className='content'>
                    <Typography marginBottom='5vw' color='primary' fontSize='6vw' fontWeight='large'>Your time, your talent, <br /> your impact.</Typography>
                    <NavLink style={{ textDecoration: 'none' }} to='/GetStarted'><Button color='secondary' variant="contained" sx={{ height: '3.8vw', width: '11vw', fontSize: '1.1vw', borderRadius: '0.6vw' }} disableElevation>Get started</Button></NavLink>
                </div>
                <video autoPlay loop muted>
                    <source type='video/mp4' src='https://www.volunteerworld.com/static/banner.mp4' />
                </video>
            </Box>
            <Box component='div' id='about' bgcolor='primary' sx={{height: {xs: '30vh', sm: '80vh'}}} width='100vw' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                <Box width='40vw' display='flex' flexDirection='column' flexWrap='wrap' marginLeft='5%'>
                    <Typography textAlign='left' fontSize='3vw' color='secondary' fontWeight='medium' marginBottom='3%'>About Us</Typography>
                    <Typography textAlign='left' fontSize='1.5vw' color='secondary'>Our organization is dedicated to connecting passionate individuals with meaningful volunteer opportunities that positively impact their communities and the world around them. We believe that by empowering people to give back, we can create a better future for all.</Typography>
                </Box>
                <ImageList
                    sx={{ width: '30vw', height: '30vw', marginRight: '5%' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

export default HomePage;