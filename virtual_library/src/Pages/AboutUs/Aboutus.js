import React from "react";
import "./Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import GoBack from "../../Components/GoBack/GoBack";


function Aboutus() {

    return (
        <div>

            <Navbar />

            <div className="About-us">
                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: '25px', width: '50px' }}><GoBack /></div>
                    <div className="AboutUs-image">
                        <div className="group-name"></div>
                    </div>
                </div>


                <div className="team">
                    <h2 className="highlights">TEAM HOFF</h2>
                    <p>We are a team of 12 engineers who share the same interest and vision. </p>
                </div>

                <div className="vision">
                    <h2 style={{ textAlign: 'center' }} className="highlights">VISION, SLOGAN AND VALUES </h2>

                    <div className="infoss">
                        <div className="box box1">
                            <h3 className="highlights">OUR VISION</h3>
                            <p>To create a comfortable world for people.</p>
                        </div>

                        <div className="box box1">
                            <h3 className="highlights">OUR SLOGAN</h3>
                            <p>A step into the future.</p>
                        </div>

                        <div className="box">
                            <h3 className="highlights">OUR VALUES</h3>
                            <p>We are driven by curiosity and we are determined in transforming our dreams into a reality.</p>
                        </div>
                    </div>

                </div>

                <div className="team">
                    <h2 className="highlights">OUR SEVICES</h2>

                    <p>We help create web applications and mobile applications for businesses </p>

                </div>

                <div className="contact">
                    <h2 className="highlights">CONTACTS</h2>

                    <div className="contact-row">
                        <div className="contact-photo">

                        </div>

                        <div className="contact-column">
                            <h4 style={{ fontSize: '18px', margin: '10px' }}>Contact us on</h4>
                            <div className="contact-detail"><span className="con">Telephone:</span>+233 592001472</div>
                            <div className="contact-detail"><span className="con">Email:</span> hoffteam59@gmail.com</div>
                            <div className="contact-detail"><span className="con">Twitter:</span> @HoffTeam</div>
                            <div className="contact-detail"><span className="con">LinkedIn:</span> Team-Hoff</div>
                        </div>

                        <div className="contact-photo2"></div>

                    </div>


                </div>






            </div>

            <Footer />
        </div>


    )



}

export default Aboutus;
