import React from 'react'
import "./Navigation.css";
import List from '../List/ListComponent';
import { ListData, ListCompany, ListConnect } from '../List/ListData';


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