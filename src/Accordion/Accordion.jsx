import React, { useState } from 'react'
import { AccordionData } from './AccordionData'

const Accordion = () => {
    return (
        <section>
            <div className='accordion'>
                {AccordionData.map(({ title, content, icon, id }) => (
                    <AccordionComponet title={title} content={content} id={id} icon={icon} />
                ))}
            </div>
        </section>
    )
}

const AccordionComponet = ({ title, content, icon, id }) => {
    const [isActive, setIsActive] = useState(false);
    const Icon = icon;

    return <section className='accordion-card' key={id}>
        <div className="header-accordion" onClick={() => setIsActive(!isActive)}>
            <div><Icon /></div>
            <div>{title}</div>
            <p className='icon-toogle'>{isActive ? "v" : "^"}</p>
        </div>

        <div className="content-accordion">
            {isActive && <p className='card-info'>{content}</p>}
        </div>
    </section>
}

export default Accordion