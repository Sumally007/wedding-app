import React from 'react'
import "./HowItWorks.css";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { LuScanLine } from "react-icons/lu";
import Buttons from '../Buttons';
import { H2, H4, ParagraphNormal, ParagraphSubtitle, ParagraphSmall } from "../Typography";






const HowItWorks = () => {
    const cardData = [
        { id: 1, heading: "Contact Y-Ya", comment: "Reach out to wire your event and tell us what kind of celebration you are planning.", icon: <IoCallOutline className='icon' />, color: "lab(9 -0.81 -5.67)" },
        { id: 2, heading: "Share Event Details", comment: "Provide event name, date, time, image, contact number, and your temporary lipa number.", icon: <GrDocumentText className='icon icon-active' />, color: "lab(57 3.31 -65.44)" },
        { id: 3, heading: "We Set Everything Up", comment: "Y-Ya creates your event page, QR code, and the features included in your package.", icon: <IoSettingsOutline className='icon' /> },
        { id: 4, heading: "Guests Scan & Celebrate", comment: "Guests scan the QR code to send gifts, upload moments, and join the live celebration.", icon: <LuScanLine className='icon' /> }
    ]
    return (
        <section className='how-it-works-section'>
            <div className='header-works-section'>
                <p className='top-header'>How it works</p>
                <H2 className='heading-event'>How Your Event Goes Live</H2>
                {/* <h1 className='heading-event'>How Your Event Goes Live</h1> */}
                <ParagraphSubtitle className='bottom-subtitle'>Getting started is simple. You share a few details, we set up the experience, and guests use it on event day.</ParagraphSubtitle>
                {/* <p className='bottom-subtitle'>Getting started is simple. You share a few details, we set up the experience, and guests use it on event day.</p> */}
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
                {/* <button className='btn'>Wire an Event</button> */}

                <Buttons words="Wire an Event"
                    classname="btn" >
                </Buttons>
                <ParagraphSmall>We help you set everything up before the big day</ParagraphSmall>
                {/* <p>We help you set everything up before the big day</p> */}
            </div>
        </section>
    )
}

const CardComponent = ({ item }) => {
    return (
        <div className="card" style={{ backgroundColor: item.color }}>
            <div className="icon-box">
                {item.icon}
            </div>
            <div className="feature-text">
                <H4>{item.heading}</H4>
                {/* <h3>{item.heading}</h3> */}
                <ParagraphNormal>{item.comment}</ParagraphNormal>
                {/* <p>{item.comment}</p> */}
            </div>
        </div>
    )
}

export default HowItWorks