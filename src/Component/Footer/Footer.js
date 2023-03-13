import React from 'react';
import './Footer.css';
import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo1 from "../../Assest/images/fitness-gym-logo.png"


const Footer = () => {
    return (
        <div>
           <div className="FooterMaindiv">
            <div className="Footerdiv">
            <ul className="UlTag">
                <li><img src={Logo1 } alt="" className="Logotag"/></li>
                <li style={{width:"220px"}}>Lorem ipsum dolor sit amet, consectetur adiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
            <ul className="UlTag">
                <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
                <li><Form className="scribebtn" >
            <Form.Control
              type="Email"
              placeholder="Email address"
              className="me-2"
              aria-label="Search"
            />
          </Form></li>
                <li><Button variant="contained" SUBSCRIBE className="scribebtn">
      SUBSCRIBE
    </Button></li>
            </ul >
            <ul className="UlTag">
                <h6>QUICK LINKS</h6>
                <li>Home</li>
                <li>Coaching</li>
                <li>Join The Team</li>
                <li>Shop</li>
            </ul>
           <ul className="UlTag">
            <h6>MY ACCOUNT</h6>
            <li>Login</li>
            <li>Register</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Returns</li>
           </ul>
            </div>
            <div>
            <p>Copyright © Envysion Fitness 2022. All rights reserved.</p>
           </div>
           <div>
           <FacebookIcon className="SocialIcon"/>
           <InstagramIcon className="SocialIcon"/>
           <YouTubeIcon className="SocialIcon"/>
           <WhatsAppIcon className="SocialIcon"/>
           </div>
           </div>
        
             </div>
    );
};

export default Footer;