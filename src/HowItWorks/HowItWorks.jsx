import React from 'react'
import "../../src/HowItWorks/HowItWorks.css";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { LuScanLine } from "react-icons/lu";



const HowItWorks = () => {
    const cardData = [
        { id: 1, heading: "Contact Y-Ya", comment: "Reach out to wire your event and tell us what kind of celebration you are planning.", icon: <IoCallOutline className='icon' /> },
        { id: 2, heading: "Share Event Details", comment: "Provide event name, date, time, image, contact number, and your temporary lipa number.", icon: <GrDocumentText className='icon icon-active' /> },
        { id: 3, heading: "We Set Everything Up", comment: "Y-Ya creates your event page, QR code, and the features included in your package.", icon: <IoSettingsOutline className='icon' /> },
        { id: 4, heading: "Guests Scan & Celebrate", comment: "Guests scan the QR code to send gifts, upload moments, and join the live celebration.", icon: <LuScanLine className='icon' /> }
    ]
    return (
        <section className='how-it-works-section'>
            <div className='header-works-section'>
                <p className='top-header'>How it works</p>
                <h1>How Your Event Goes Live</h1>
                <p className='bottom-subtitle'>Getting started is simple. You share a few details, we set up the experience, and guests use it on event day.</p>
            </div>
            <div className='card-section'>
                {cardData.map((item) => (
                    <CardComponent key={item.id} item={item} />
                ))}

                {/* <div className="card active">
                    <div className="icon-box">
                        <GrDocumentText className='icon icon-active' />
                    </div>
                    <div className="feature-text ">
                        <h3>Share Event Details</h3>
                        <p>Provide event name, date, time, image, contact number, and your temporary lipa number.</p>
                    </div>
                </div> */}

            </div>
            <div className='footer-works-section'>
                <button className='btn'>Wire an Event</button>
                <p>We help you set everything up before the big day</p>
            </div>
        </section>
    )
}

const CardComponent = ({ item }) => {
    return (
        <div className="card">
            <div className="icon-box">
                {item.icon}
            </div>
            <div className="feature-text">
                <h3>{item.heading}</h3>
                <p>{item.comment}</p>
            </div>
        </div>
    )
}

export default HowItWorks