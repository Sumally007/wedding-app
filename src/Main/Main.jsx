import React from 'react'
import "../../src/Main/Main.css";
import { IoIosTrendingUp } from "react-icons/io";
import { LuBanknote } from "react-icons/lu";
import { BsCheck2 } from "react-icons/bs";

const Main = () => {
    return (
        <section className='everything'>
            <div className='left-container-main'>
                <div className='top-main-content'>
                    <div>
                        <p>Total Contributions</p>
                        <h2>2,847 <span><IoIosTrendingUp className='trend-icon' /> 18%</span></h2>
                    </div>
                    <div className='trend-icon-right'><IoIosTrendingUp /></div>
                </div>
                <div>
                    <div className='first-top-container'>
                        <div className='gift-container-top'>
                            <p>Gifts Collected</p>
                            <p className='numb'>78%</p>
                        </div>
                        <div className='outside-bar'>
                            <div className='inside-bar'></div>
                        </div>
                    </div>
                    <div className='first-top-container'>
                        <div className='gift-container-top'>
                            <p>Photos Shared</p>
                            <p className='numb'>78%</p>
                        </div>
                        <div className='outside-bar'>
                            <div className='inside-bar'></div>
                        </div>
                    </div>
                    <div className='first-top-container'>
                        <div className='gift-container-top'>
                            <p>Live Views</p>
                            <p className='numb'>78%</p>
                        </div>
                        <div className='outside-bar'>
                            <div className='inside-bar'></div>
                        </div>
                    </div>
                </div>
                <div className='treading-container'>
                    <div className='top-treading-container'>
                        <div className='bank-flex'>
                            <div className='bank-note-container'><LuBanknote className='bank-note' /></div>
                            <p>Weekly Activity</p>
                        </div>
                        <div className='check-flex'>
                            <BsCheck2 />
                            <p>Active</p>
                        </div>
                    </div>
                    <div className='starts-heading'>
                        <h2>450+<p>events this month
                        </p></h2>
                    </div>
                    <div className='stats-container'>
                        <div>
                            <div className='first-bar'></div>
                            <p>Mon</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Tue</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Wed</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Thu</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Fri</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Sat</p>
                        </div>
                        <div>
                            <div className='first-bar'></div>
                            <p>Sun</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container-main'>

            </div>
        </section>
    )
}

export default Main