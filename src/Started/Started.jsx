import React from 'react'
import { LuArrowUpRight, LuQrCode } from "react-icons/lu";
import { CiGift, CiCamera } from "react-icons/ci";
import "../../src/Started/Started.css";



const Started = () => {
    return (
        <section className='started-section'>
            <div className="started-container">
                <div className='left-started-content'>
                    <p className='top-header'>Let's get started</p>
                    <h1>Make Your Next Event <span>Unforgettable</span></h1>
                    <p className='sub-intro'>Talk to us early so your event can be set up and ready before the big day.</p>
                    <button className='btn'>Wire an Event <LuArrowUpRight /></button>
                </div>
                <div className='middile-started-content'>
                    <div className="icon-box">
                        <LuQrCode className='icon icon-code' />
                    </div>
                    <div className='span-circle'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="icon-flex">
                        <div className="icon-box">
                            <CiGift className='icon' />
                        </div>
                        <div className="icon-box">
                            <CiCamera className='icon' />
                        </div>
                    </div>
                </div>
                <div className='right-started-content'>
                    <div className="circle-container">
                        <div className='profile-picture'>AK</div>
                        <div className='profile-picture ontop-circle'>BM</div>
                        <div className='profile-picture ontop-circle-sec'>CD</div>
                        <div className='profile-picture ontop-circle-thr'>EN</div>
                        <div className='profile-picture little-right'>+500</div>
                    </div>
                    <h3>Event organizers already trust Y-Ya. Join them!</h3>
                    <p>Perfect for weddings, send-offs, celebrations, and fundraisers. One QR code for everything.</p>
                    <div className="buttons-container">
                        <button>WhatsApp</button>
                        <button>Instagram</button>
                        <button>TikTok</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Started