import React from 'react';
import SocMediaGrid from './elements/socMediaGrid';

function Footer(){
    return (
        <div className="footer">
            <div className="footer-left">
                <div className='footer-left-header'>
                    <p>Get in touch</p>
                </div>
                <div className='footer-left-body'>
                    <p>If you are a memeber from another organization, send us an email to:</p>
                    <a href="mailto:nahra.usa@gmail.com">NAHRA U.S.A.</a>
                    <p>If you need assistance of NAHRA, you can email us to:</p>
                    <a href="nahracases@gmail.com">NAHRA Cases</a>
                    <p>If you would like to become a volunteer, email us at:</p>
                    <a href="volunteer@nahraglobal.org">Volunteer</a>
                </div>
                
            </div>
            <div className="footer-center">
                <div className='footer-center-header'>
                    <p>Follow Us in Social Media</p>
                </div>
                <SocMediaGrid />
            </div>
            <div className="footer-right">Right</div>

        </div>
    )
}


export default Footer;