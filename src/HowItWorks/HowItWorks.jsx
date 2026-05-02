import React from 'react'
import "../../src/HowItWorks/HowItWorks.css";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { LuScanLine } from "react-icons/lu";



const HowItWorks = () => {
    return (
        <section className='how-it-works-section'>
            <div className='header-works-section'>
                <p className='top-header'>How it works</p>
                <h1>How Your Event Goes Live</h1>
                <p className='bottom-subtitle'>Getting started is simple. You share a few details, we set up the experience, and guests use it on event day.</p>
            </div>
            <div className='card-section'>
                <div className="card">
                    <div className="icon-box">
                        <IoCallOutline className='icon' />
                    </div>
                    <div className="feature-text">
                        <h3>Contact Y-Ya</h3>
                        <p>Reach out to wire your event and tell us what kind of celebration you are planning.</p>
                    </div>
                </div>
                <div className="card active">
                    <div className="icon-box">
                        <GrDocumentText className='icon icon-active' />
                    </div>
                    <div className="feature-text ">
                        <h3>Share Event Details</h3>
                        <p>Provide event name, date, time, image, contact number, and your temporary lipa number.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon-box">
                        <IoSettingsOutline className='icon' />
                    </div>
                    <div className="feature-text">
                        <h3>We Set Everything Up</h3>
                        <p>Y-Ya creates your event page, QR code, and the features included in your package.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon-box">
                        <LuScanLine className='icon' />
                    </div>
                    <div className="feature-text">
                        <h3>Guests Scan & Celebrate</h3>
                        <p>Guests scan the QR code to send gifts, upload moments, and join the live celebration.</p>
                    </div>
                </div>
            </div>
            <div className='footer-works-section'>
                <button className='btn'>Wire an Event</button>
                <p>We help you set everything up before the big day</p>
            </div>
        </section>
    )
}

export default HowItWorks