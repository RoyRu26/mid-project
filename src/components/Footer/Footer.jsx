import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box,Button, IconButton, Typography,Drawer,TextField } from "@mui/material";
import { useState } from "react";
import SpaIcon from '@mui/icons-material/Spa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Footer() {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const form=useRef()
    const updateUserArr = () =>
        {
            emailjs.sendForm('service_yaaa6zj', 'template_xqnyyfs', form.current, 'zARXXwcWVFn8ywbi0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
        }
    return (
        <Box sx={{ bgcolor: 'rgb(245, 243, 243)', height: {xs: '10vw', sm: '5vw'}}} className='FooterDiv' display='flex' justifyContent='space-between' alignItems='center' width='100vw'>
            <Box display='flex' flexDirection='row' gap='5vw' alignItems='center' marginLeft='3%'>
                <SpaIcon color="secondary" />
                <a href="emailto: GiveBackNation@gmail.com" style={{textDecoration:'none'}}>
                 <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <form style={{display:'flex'}} ref={form} >
                <Box display='flex' flexDirection='row' alignItems='center' gap='3vw' p='1vw' height='10vh' width='100%' textAlign='center' role='presentation'>
                <TextField name='firstName' type='text' sx={{width: '30%'}}  placeholder='First Name'></TextField>
                <TextField name='lastName' type='text' sx={{width: '30%'}}  placeholder='Last Name'></TextField>
                <TextField name='message' type='text' sx={{width: '90%'}}  placeholder='text'></TextField>
                <Button sx={{bgcolor:'black', height:'70%',width:'10%'}} onClick={() => updateUserArr()}>Send</Button>
                </Box>
               </form>
                </Drawer><Typography onClick={() => setIsDrawerOpen(true)} color='secondary' fontWeight='large'>Email Us</Typography>
            </a>
            </Box>
            <Box display='flex' flexDirection='row' gap='5vw' marginRight='3%'>
                <a href="https://www.instagram.com/" target='_blank'><IconButton size="small"><InstagramIcon color="secondary"></InstagramIcon></IconButton></a>
                <a href="https://www.facebook.com/" target='_blank'><IconButton size="small"><FacebookIcon color="secondary"></FacebookIcon></IconButton></a>
                <a href="https://www.twitter.com/" target='_blank'><IconButton size="small"><TwitterIcon color="secondary"></TwitterIcon></IconButton></a>
                <a href="https://www.youtube.com/" target='_blank'><IconButton size="small"><YouTubeIcon color="secondary"></YouTubeIcon></IconButton></a>
            </Box>
        </Box>



    )


}




export default Footer