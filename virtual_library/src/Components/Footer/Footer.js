import React from 'react';
import './Footer.css';
import { FaEnvelopeSquare, FaFacebookSquare, FaLinkedin, FaMapMarked, FaPhone, FaTwitterSquare } from 'react-icons/fa';


function Footer() {
    return (
        <div>
            <div className='fo'>
                <footer className="footer-display">

                    <div className="footer-left">
                        <h1>E - <span>Library</span></h1>

                        <p className="footer-links">

                        </p>

                        <p className="footer-library-name">Copyright © 2023 <strong>WORKAHOLICS</strong> All rights reserved</p>
                    </div>

                    <div className="footer-center">
                        <div style={{ paddingBottom: '5px' }}>
                            <FaMapMarked style={{ backgroundColor: 'white' }} />
                            <p>COE 4, KNUST</p>
                        </div>

                        <div style={{ paddingBottom: '5px' }}>
                            <FaPhone style={{ backgroundColor: 'white' }} />
                            <p>+233 553212010</p>
                        </div>
                        <div style={{ paddingBottom: '5px' }}>
                            <FaEnvelopeSquare style={{ backgroundColor: 'white' }} />
                            <p>workaholics322@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <br />
                        <br />
                        <div className="footer-icons">
                            <a href="https://web.facebook.com/groups/508115227398958" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                            <a href="http://www.linkedin.com/in/workaholics-undefined-7378bb288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://twitter.com/workaholics322?s=11&t=lcRc7b8MXg2uAlE2J_GcWg" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                        </div>

                    </div>

                </footer>

            </div>
        </div>
    )
}

export default Footer