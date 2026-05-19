import React, { useState } from 'react'
import "./Navigation.css";
import List from '../List/ListComponent';
import { ListData, ListCompany, ListConnect } from '../List/ListData';


const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navigation'>
            <div className="mobile-nav">
                <div className='top-nav'>
                    <span>Y-Ya</span>
                    <div className='nav-bar' onClick={() => setMenuOpen(!menuOpen)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={`menu-container ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {ListData.map((item) => (
                            <List key={item.id} item={item} />
                        ))}
                    </ul>
                    <button>Wire an Event</button>
                </div>
            </div>

            <div className='navigation-container'>
                <div className='logo-container'>
                    {/* <img src="" alt="" /> */}
                    <span>Y-Ya</span>
                </div>
                <div className='list-container'>
                    <ul className="list-items">
                        {ListData.map((item) => (
                            <List key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
                <div className='btn-container'>
                    <button>Wire an Event</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;