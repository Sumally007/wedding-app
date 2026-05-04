import React, { useState } from 'react'
import "../../src/Accordion/Accordion.css";
import { AccordionData } from './AccordionData'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = () => {
    return (
        <section>
            <div className='accordion'>
                <h1>Frequently Asked Questions</h1>
                <p>These are the most common questions about Y-Ya.</p>
                <p>Can't find what you're looking for? <span>Chat to our friendly team!</span></p>
                <div className="accordion-card-container">
                    {AccordionData.map(({ title, content, icon, id }) => (
                        <AccordionComponet title={title} content={content} id={id} icon={icon} />
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
                <div className='head-title-box'><h3 className='head-title'>{title}</h3></div>
            </div>
            <p className='icon-toogle'>{isActive ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</p>
        </div>

        <div className="content-accordion">
            {isActive && <p className='card-info'>{content}</p>}
        </div>
    </div>
}

export default Accordion