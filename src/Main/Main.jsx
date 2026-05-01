import React from 'react'
import "../../src/Main/Main.css";
import { IoIosTrendingUp } from "react-icons/io";
import { LuBanknote } from "react-icons/lu";
import { BsCheck2 } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuTvMinimalPlay } from "react-icons/lu";

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
            <div className='features-section'>
                <h1 className="main-title">Everything Your Event Needs in One Place</h1>
                <p className="subtitle">Whether you want to collect gifts, capture guest memories, or create a more interactive MC experience — Y-Ya brings it together in one simple flow.</p>

                <div className="features-list">
                    <div className="feature-item">
                        <div className="icon-box">
                            <LuBanknote className='icon' />
                        </div>
                        <div className="feature-text">
                            <h3>Receive Gifts With Ease</h3>
                            <p>Guests scan the QR code, copy your lipa number, send their gift through mobile money, and submit their name, amount, and message in seconds.</p>
                        </div>
                    </div>


                    <div className="feature-item">
                        <div className="icon-box">
                            <CiCamera className='icon' />
                        </div>
                        <div className="feature-text">
                            <h3>Collect Every Moment</h3>
                            <p>Let guests upload photos and videos from their phones so you gather authentic memories from every angle of the event.</p>
                        </div>
                    </div>


                    <div className="feature-item">
                        <div className="icon-box">
                            <LuTvMinimalPlay className='icon' />
                        </div>
                        <div className="feature-text">
                            <h3>Bring Contributions to Life</h3>
                            <p>Contributions appear on the live MC feed as they come in. Keep the crowd engaged with instant shoutouts and celebration moments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main