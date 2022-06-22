import React from 'react';
import '../CSS/FooterCSS.css';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-main-details'>
            <div className="footer-main-information">
                <h1>TheAdventure</h1>
                <p>TheAdventure is a travel blog where you can share your travel experience and you can also explore new places with other's. </p>
            </div>
            <div className="footer-main-contact">
                <h2>Contact Us</h2><hr width='50%'/>
                <h5>Feel free to contact us</h5>
                <h5><CallIcon className='footer-main-icon'/> +91-7737152961</h5>
                <h5><MailIcon className='footer-main-icon'/> akshatgadodia@gmail.com</h5>
            </div>
        </div>
        <hr />
        <div className="footer-main-credits">
            Created By <span>Akshat Gadodia</span> | All Rigths Reserved
        </div>
    </div>
  )
}

export default Footer