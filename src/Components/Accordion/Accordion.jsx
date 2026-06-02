import React, { useState } from 'react'
import "./Accordion.css";
import { AccordionData } from './AccordionData'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { H2, H4, ParagraphNormal } from "../Typography";

const Accordion = () => {
    return (
        <section>
            <div className='accordion'>
                <H2 className='heading-fsq'>Frequently Asked Questions</H2>
                {/* <h1 className='heading-fsq'>Frequently Asked Questions</h1> */}
                <ParagraphNormal>These are the most common questions about Y-Ya.</ParagraphNormal>
                {/* <p>These are the most common questions about Y-Ya.</p> */}
                <ParagraphNormal>Can't find what you're looking for? <span>Chat to our friendly team!</span></ParagraphNormal>
                {/* <p>Can't find what you're looking for? <span>Chat to our friendly team!</span></p> */}
                <div className="accordion-card-container">
                    {AccordionData.map(({ title, content, icon, id }) => (
                        <AccordionComponet title={title} content={content} key={id} icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const AccordionComponet = ({ title, content, icon, id }) => {
    const [isActive, setIsActive] = useState(false);
    const Icon = icon;

    return <div className='accordion-card' key={id}>
        <div className="header-accordion" onClick={() => setIsActive(!isActive)}>
            <div className='left-accordion'>
                <div className='icon-box'><Icon className="icon" /></div>
                <div className='head-title-box'><H4 className='head-title'>{title}</H4> </div>
            </div>
            {/* <p className='icon-toogle'>{isActive ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</p> */}
            <ParagraphNormal className='icon-toogle'>{isActive ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</ParagraphNormal>
        </div>

        <div className="content-accordion">
            {isActive && <ParagraphNormal className='card-info'>{content}</ParagraphNormal>}
        </div>
    </div>
}

export default Accordion