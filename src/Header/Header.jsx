import React from 'react'
import "../../src/Header/Header.css";

import { FiMessageSquare } from "react-icons/fi";

const Header = () => {
    return (
        <section className='header-sect'>
            <h1 className='heading'>Every Event Moment, <span>Seamlessly Connected</span></h1>
            <p className='content'>Give your guests the easiest way to share photos, send mobile money gifts, and celebrate together — all from one simple scan.</p>
            <div className='buttons-container'>
                <button className='btn'>Wire an Event</button>
                <button className='btn btn-icon'><FiMessageSquare className='message-icon' /> <span>Contanct Us</span></button>
            </div>
        </section>
    )
}

export default Header