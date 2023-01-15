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
        <Box className='FooterDiv'>
            <SpaIcon color="secondary"/>
            {/* <IconButton><ShareIcon color="secondary"></ShareIcon></IconButton> */}
            <a href="https://www.instagram.com/"><IconButton size="small"><InstagramIcon color="secondary"></InstagramIcon></IconButton></a>
            <a href="https://www.facebook.com/"><IconButton size="small"><FacebookIcon color="secondary"></FacebookIcon></IconButton></a>
            <a href="https://www.twitter.com/"><IconButton size="small"><TwitterIcon color="secondary"></TwitterIcon></IconButton></a>
            <a href="https://www.youtube.com/"><IconButton size="small"><YouTubeIcon color="secondary"></YouTubeIcon></IconButton></a>
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



    )


}




export default Footer