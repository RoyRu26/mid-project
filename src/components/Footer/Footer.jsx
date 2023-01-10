import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import img from "../Footer/a.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShareIcon from '@mui/icons-material/Share';
import { Box, IconButton, Typography } from "@mui/material";
import SpaIcon from '@mui/icons-material/Spa';

function Footer() {
    return (
        <Box display='flex' justifyContent='space-around' alignItems='center' width='100%' position='sticky' bottom='0'>
            <SpaIcon color="secondary"/>
            <a href="emailto: GiveBackNation@gmail.com" style={{textDecoration:'none'}}><Typography color='secondary' fontWeight='large'>Email Us</Typography></a>
            <IconButton><ShareIcon color="secondary"></ShareIcon></IconButton>
            <a href="https://www.instagram.com/"><IconButton size="small"><InstagramIcon color="secondary"></InstagramIcon></IconButton></a>
            <a href="https://www.facebook.com/"><IconButton size="small"><FacebookIcon color="secondary"></FacebookIcon></IconButton></a>
            <a href="https://www.twitter.com/"><IconButton size="small"><TwitterIcon color="secondary"></TwitterIcon></IconButton></a>
            <a href="https://www.youtube.com/"><IconButton size="small"><YouTubeIcon color="secondary"></YouTubeIcon></IconButton></a>
        </Box>
    )

}




export default Footer