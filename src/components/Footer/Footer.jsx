import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import img from "../Footer/a.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShareIcon from '@mui/icons-material/Share';
function Footer(){

    return(
        <div className="FooterDiv">
         <img className="LogoImage" src={img} alt="" />
         
            <span><a href="emailto: GiveBackNation@gmail.com">EMail Us!</a></span>
           <ShareIcon></ShareIcon>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <YouTubeIcon></YouTubeIcon>
         






        </div>
    )

}




export default Footer