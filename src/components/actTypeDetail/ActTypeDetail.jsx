import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Button, Typography,Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import '../getstarted.css'
import { useState } from 'react';
function ActTypeDetail() {
    const location = useLocation()
    const [swipe,setSwipe]=useState(0)
    let text = ''
    let arr=[]
    const wildLifeImages=['https://image.volunteerworld.com/a1dab6ee444e743388602bd6676205be84794045/Costa-Rica---Wildlife-Conservation-61.jpg?auto=format&crop=faces&fit=crop',
    'https://image.volunteerworld.com/2725d032c33809d195c73f7b6abc991cb1e95bad/Costa-Rica---Wildlife-Conservation-46.jpg?auto=format&crop=faces&fit=crop',
    'https://image.volunteerworld.com/454124f63334b2825b5413447ff152772715d5c3/Costa-Rica---Wildlife-Conservation-42.jpg?auto=format&crop=faces&fit=crop',
    'https://image.volunteerworld.com/68d9fc21c4017672013f7b563e01dfcdae838fa9/Costa-Rica---Wildlife-Conservation-3.jpg?auto=format&crop=faces&fit=crop',
    'https://image.volunteerworld.com/4d1d75ec9cd6215f130d0bff0f66edad1f49b061/Costa-Rica---Wildlife-Conservation-52.jpg?auto=format&crop=faces&fit=crop'
    ]
    const educationImages=[
        'https://image.volunteerworld.com/8899274cd71e3d477eac5a1f76415bd0441da55a/Costa-Rica---Education-Support-8.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/85797ce57cd3368b8761e9946f639edbca0b0d05/Costa-Rica---Education-Support-5.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/8ef0cc6fbb275f4bab91bd68dad0d4ae3252144a/Costa-Rica---Education-Support-3.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/3f3b5d43ed5c0f928095b0fe9466baca8b5c565c/Costa-Rica---Education-Support-9.jpg?auto=format&crop=faces&fit=crop'
    ]
    const HumaniterianImages=[
        'https://image.volunteerworld.com/3022a3a7f7681ee979c4e6a8cc13f206eb9f4783/131115adultomayormanofull.jpg?auto=format&crop=faces&fit=crop&h=286.3125&w=509',
        'https://image.volunteerworld.com/de9dd8deb16eaccc3a94c4bc50bf4870813a4153/c7d1c4251707f94c7ef717bb99c7954a.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/706202aa2c29601b1985287694e6a9d467404883/Medical-volunteering-in-Costa-Rica.jpg?auto=format&crop=faces&fit=crop&h=383.0625&w=681',
        'https://image.volunteerworld.com/082485b366764758e68d3bfd2844b82718b1fc9b/holiday-program-volunteer-abroad-4.jpg?auto=format&crop=faces&fit=crop'
    ]
    const AnimalCareImages=[
        'https://image.volunteerworld.com/cdc97510876c37c17a918938db38861a09b7b45f/IMG2180.jpg?auto=format&crop=faces&fit=crop&h=850.5&w=1512',
        'https://image.volunteerworld.com/d347fd85d7994ece02147c8812a9ba8413ee6e1d/FBIMG1554515943986.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/16d8409913a7359a307acc3fcd01a9d2a129d9c1/IMG-20181027-WA0024.jpg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/301eb9222eca7481434c91035b6f83a49ef50b5f/F2BA58D2-FAA4-4684-80A4-2DC12CFFE926.jpeg?auto=format&crop=faces&fit=crop',
        'https://image.volunteerworld.com/f5dd5e83d780f137aa224c78b6ca1164a9efee40/6d8a3d6e-e721-469f-8530-f8c699e2b9f9.jpg?auto=format&crop=faces&fit=crop'
    ]
    const AdventureImages=[
        'https://cdn.tourradar.com/s3/tour/1500x800/83463_729e4c0a.jpg',
        'https://cdn.tourradar.com/s3/tour/1500x800/83463_66d75982.jpg',
        'https://cdn.tourradar.com/s3/tour/1500x800/83463_5157cc11.jpg',
        'https://cdn.tourradar.com/s3/tour/1500x800/126952_62a475f963618.jpg',
        'https://cdn.tourradar.com/s3/tour/1500x800/126952_62f78fb44641d.jpg',
        'https://cdn.tourradar.com/s3/tour/1500x800/126952_62f78f98427b9.jpg'
    ]
    if (location.state.actType === 'WildLife') {
        text = `This program truly gives volunteers the chance to 
            experience a wildlife program working with some of the most amazing creatures 
            on earth. Volunteers will meet new friends, learn a huge amount about Costa 
            Rica's native species and about caring for animals and wildlife centres - all while 
            experiencing the amazing culture and landscapes of this stunning country. 
            And there's the feeling of satisfaction for volunteers of knowing they've worked hard 
            to help the lives of individual animals and the continuation of the species in general.`
            arr=wildLifeImages
    }
    else if(location.state.actType === 'Humanitarian Support'){
        text=`Humanitarian support is a vital aspect of any community and is often provided by
            dedicated volunteers. Our volunteer project aims to provide essential aid and support to 
            those in need, both locally and internationally. We work closely with local organizations and
            non-profits to identify areas where support is needed most, and then mobilize volunteers to 
            provide assistance. Our volunteers come from all walks of life and have a wide range of skills
            and experiences, but what they all share is a desire to make a positive impact on the world. 
            Whether it's through distributing food and supplies, providing medical care, or helping to rebuild 
            communities affected by natural disasters, our volunteers are making a real difference in the lives 
            of those in need. We are always looking for dedicated individuals who are passionate about making a difference
            to join our team and help us make an even greater impact.`
        arr=HumaniterianImages
    }
    else if(location.state.actType === 'Education'){
        text=`Our education volunteer project is designed to provide underprivileged children with the
            opportunity to learn and grow through interactive and engaging activities. As a volunteer,
            you will assist with the planning and implementation of educational programs, such as tutoring, 
            reading programs, and STEM activities. You will have the chance to work one-on-one with students,
            helping them to develop their skills and reach their full potential. Additionally, you will be able 
            to witness firsthand the positive impact that education can have on a child's life and the community as
            a whole. This volunteer opportunity is perfect for those who are passionate about education and making a 
            difference in the lives of children. No prior experience is necessary, just a willingness to learn and help`
        arr=educationImages
    }
    else if(location.state.actType === 'Animal Care'){
        text=`Our animal care volunteer project offers participants the opportunity
            to work hands-on with a variety of animals while making a positive impact on 
            their lives. As a volunteer, you will assist with daily tasks such as feeding, grooming, and cleaning
            enclosures, as well as observing and monitoring the animals' behavior. Not only will you gain
            valuable experience working with animals, but you will also be making a meaningful contribution to
            their welfare. Additionally, you will have the chance to learn from experienced staff members and 
            gain knowledge about the specific animals in our care. This is a great opportunity for those interested
            in pursuing a career in animal welfare, veterinary medicine, or biology. We welcome volunteers of all
            ages and experience levels to join us in making a difference for these animals.`
        arr=AnimalCareImages
    }
    else if(location.state.actType === 'Adventure And Tours'){
        text=`Our adventure and tour guide volunteer project offers participants the opportunity 
            to explore and discover new places while also making a positive impact on the community.
            As a volunteer, you will assist in planning and leading adventure tours and cultural excursions,
            providing visitors with an authentic and memorable experience. You will learn about the natural
            and cultural history of the area, while also gaining valuable experience in tour guide and leadership skills. 
            Not only will you have the opportunity to discover new places, but you will also be promoting sustainable tourism
            and supporting local communities. This is a great opportunity for those interested in travel, adventure,
            and cultural exchange`
        arr=AdventureImages
    }
    
    return (
        <div style={{backgroundColor:'wheat',width:'100vw',height:'100vh'}}>
            <Typography marginTop='1vw' p='3%' fontSize='4vw' textAlign='center' fontWeight='large' color='secondary'>{`${location.state.actType} in ${location.state.country}`}</Typography>
            <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <div style={{width:'35%',marginLeft:'2vw',flexDirection:'column'}}><Typography color='secondary' >{text}</Typography>
                <div style={{marginTop:'1vw',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><RestaurantIcon color='secondary'></RestaurantIcon> <Typography color='secondary'>Food</Typography></div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><HotelIcon color='secondary'></HotelIcon> <Typography color='secondary'>Housing</Typography></div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><LocalTaxiIcon color='secondary'></LocalTaxiIcon> <Typography color='secondary'>Airport Taxi</Typography></div>
                </div>
                  <div style={{textAlign:'center',marginTop:'2vw'}}><NavLink style={{textDecoration:'none'}} to='/ApplyPage' state={{ country: location.state.country, actType: location.state.actType ,days:location.state.days }}><Button color='secondary' variant="contained" sx={{textAlign:'center'}}>Apply</Button></NavLink></div>  
                {/* <div style={{display:'flex',width:'50%',height:'60%',alignItems:'center'}}> */}
                    {/* <iframe style={{position:'static'}} width="80%" height="60%" src="https://maps.google.com/maps?q=arusha&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"/> */}
                {/* </div> */}
            </div>
            
            <div style={{width:'55%',height:'50vh',display:'flex',alignItems:'center'}}>
                <ArrowBackIosIcon sx={{borderRadius:'50%',cursor:'pointer'}} onClick={()=>setSwipe(swipe+1===arr.length?1:swipe+1)}>+</ArrowBackIosIcon>
                <div style={{width:'100%',height:'100%' ,backgroundImage:`url(${arr[swipe]})`,backgroundSize:'cover',borderRadius:'0.5vw'}}></div>
                <ArrowForwardIosIcon sx={{borderRadius:'50%',cursor:'pointer'}} onClick={()=>setSwipe(swipe-1<=0?wildLifeImages.length-1:swipe-1)}>-</ArrowForwardIosIcon>
            </div>
            </Box>
          
            
        </div>

    );
}

export default ActTypeDetail;