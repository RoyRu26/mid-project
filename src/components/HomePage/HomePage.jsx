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
            img: 'https://image.volunteerworld.com/454124f63334b2825b5413447ff152772715d5c3/Costa-Rica---Wildlife-Conservation-42.jpg?auto=format&crop=faces&fit=crop',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://image.volunteerworld.com/68d9fc21c4017672013f7b563e01dfcdae838fa9/Costa-Rica---Wildlife-Conservation-3.jpg?auto=format&crop=faces&fit=crop',
        },
        {
            img: 'https://image.volunteerworld.com/8ef0cc6fbb275f4bab91bd68dad0d4ae3252144a/Costa-Rica---Education-Support-3.jpg?auto=format&crop=faces&fit=crop',
        },
        {
            img: 'https://image.volunteerworld.com/082485b366764758e68d3bfd2844b82718b1fc9b/holiday-program-volunteer-abroad-4.jpg?auto=format&crop=faces&fit=crop',
            cols: 2,
        },
        {
            img: 'https://cdn.tourradar.com/s3/tour/1500x800/83463_5157cc11.jpg',
            cols: 2,
        },
        {
            img: 'https://image.volunteerworld.com/de9dd8deb16eaccc3a94c4bc50bf4870813a4153/c7d1c4251707f94c7ef717bb99c7954a.jpg?auto=format&crop=faces&fit=crop',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://cdn.tourradar.com/s3/tour/1500x800/126952_62a475f963618.jpg',
        },
        {
            img: 'https://cdn.tourradar.com/s3/tour/1500x800/126952_62f78fb44641d.jpg',
        },
        {
            img: 'https://image.volunteerworld.com/4d1d75ec9cd6215f130d0bff0f66edad1f49b061/Costa-Rica---Wildlife-Conservation-52.jpg?auto=format&crop=faces&fit=crop',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        },
        {
            img: 'https://image.volunteerworld.com/706202aa2c29601b1985287694e6a9d467404883/Medical-volunteering-in-Costa-Rica.jpg?auto=format&crop=faces&fit=crop&h=383.0625&w=681',
        },
        {
            img: 'https://image.volunteerworld.com/85797ce57cd3368b8761e9946f639edbca0b0d05/Costa-Rica---Education-Support-5.jpg?auto=format&crop=faces&fit=crop',
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
            <Box component='div' id='about' bgcolor='primary' sx={{ height: { xs: '30vh', sm: '80vh' } }} width='100vw' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
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