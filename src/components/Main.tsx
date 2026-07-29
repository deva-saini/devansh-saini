import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Phone';
import GmailIcon from '@mui/icons-material/Email';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import ProfilePhoto from '../assets/images/ProfilePhoto.png'

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePhoto} alt="Avatar" width="100%" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="tel:9568139258" target="_blank" rel="noreferrer"><CallIcon/></a>
            <a href="https://wa.me/9568139258" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
            <a href="https://mail.google.com/mail/?view=cm&to=devanshsaini831@gmail.com&su=Enquiry%20from%20your%20portfolio&body=Hi%20Ashwani%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks!" target="_blank" rel="noreferrer"><GmailIcon/></a>
            <a href="https://www.instagram.com/editxversh?igsh=MWVheHVwZmEyNTF3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/devanshsaini0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Devansh Saini</h1>
          <p>Video Editor</p>
          {/* <a href="/Ashwani-Kumar-2025.pdf" download="Ashwani-Kumar-2025.pdf" target="_blank" className="download-cv">Download CV</a> */}

          <div className="mobile_social_icons">
            <a href="tel:9568139258" target="_blank" rel="noreferrer"><CallIcon/></a>
            <a href="https://wa.me/9568139258" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
            <a href="https://mail.google.com/mail/?view=cm&to=devanshsaini831@gmail.com&su=Enquiry%20from%20your%20portfolio&body=Hi%20Ashwani%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks!" target="_blank" rel="noreferrer"><GmailIcon/></a>
            <a href="https://www.instagram.com/editxversh?igsh=MWVheHVwZmEyNTF3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/devanshsaini0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;