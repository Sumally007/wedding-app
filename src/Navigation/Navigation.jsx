import React from 'react'
import "../../src/Navigation/Navigation.css";
const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className='navigation-container'>
                <div className='logo-container'>
                    {/* <img src="" alt="" /> */}
                    <span>Y-Ya</span>
                </div>
                <div className='list-container'>
                    <ul className="list-items">
                        <li>Features</li>
                        <li>How It Works</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='btn-container'>
                    <button>Wire an Event</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation