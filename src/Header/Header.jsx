import React from 'react'
import "../../src/Header/Header.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
    return (
        <section className='header-sect'>
            <h1 className='heading'>Every Event Moment, <span>Seamlessly Connected</span></h1>
            <p className='content'>Give your guests the easiest way to share photos, send mobile money gifts, and celebrate together — all from one simple scan.</p>
            <div className='buttons-container'>
                <button className='btn'>Wire an Event</button>
                <button className='btn btn-icon'><FiMessageSquare className='message-icon' /> <span>Contanct Us</span></button>
            </div>

            <div className='contribution-container'>
                <div className='moment-container'>
                    <div className='detailes-container'>
                        <div className='camera-icon-container'>
                            <MdOutlinePhotoCamera className='camera' />
                        </div>
                        <div className='word-container'>
                            <h3>Moments</h3>
                            <p>Live photo sharing</p>
                        </div>
                    </div>

                    <div className='images-container'>
                        <div className='weading-image-container'>
                            <img className='weading-image' src="src/assets/images/weading image.webp" alt="image" />
                            <img className='weading-image position' src="/src/assets/images/weading image2.webp" alt="" />
                        </div>
                    </div>
                    <div className='ontop-container'>
                        <FaHeart className='heart-icon' />
                        <p>124 Shared</p>
                    </div>
                </div>
                <div className='live-container'>
                    <div className='top-container'>
                        <div className='left-container'>
                            <div className='gift-container'>
                                <CiGift className='gift-icon' />
                            </div>
                            <div className='text-container'>
                                <h3>Live Contributions</h3>
                                <p>Instant mobile money gifts</p>
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='circle'></div>
                            <p>Live</p>
                        </div>
                    </div>
                    <div className='middle-container'>
                        <div className='middle-container-content'>
                            <div className='profile-detailes'>
                                <div className='profile-picture'>
                                    JD
                                </div>
                                <div className='picture-detailes'>
                                    <h3>John Doe</h3>
                                    <p>“Wishing you the best!”</p>
                                </div>
                            </div>
                            <div className='amount-conributed'>
                                <h3>+TZS 150,000</h3>
                            </div>
                        </div>
                        <div className='middle-container-content'>
                            <div className='profile-detailes'>
                                <div className='profile-picture'>
                                    SA
                                </div>
                                <div className='picture-detailes'>
                                    <h3>Sarah Adams</h3>
                                    <p>“Congratulations guys!”</p>
                                </div>
                            </div>
                            <div className='amount-conributed'>
                                <h3>+TZS 50,000</h3>
                            </div>
                        </div>
                        <div className='middle-container-content'>
                            <div className='profile-detailes'>
                                <div className='profile-picture'>
                                    MK
                                </div>
                                <div className='picture-detailes'>
                                    <h3>Mike & Kim</h3>
                                    <p>“So happy for you!”</p>
                                </div>
                            </div>
                            <div className='amount-conributed'>
                                <h3>+TZS 200,000</h3>
                            </div>
                        </div>
                        <div className='middle-container-content'>
                            <div className='profile-detailes'>
                                <div className='profile-picture'>
                                    AN
                                </div>
                                <div className='picture-detailes'>
                                    <h3>Amina Ndungu</h3>
                                    <p>“Love wins always!”</p>
                                </div>
                            </div>
                            <div className='amount-conributed'>
                                <h3>+TZS 75,000</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-container'>
                        <div className='icon-content'>
                            <IoIosTrendingUp className='trend-icon' />
                            <p>Total raised</p>
                        </div>
                        <div>
                            <h3>TZS 475,000</h3>
                        </div>
                    </div>
                </div>
                <div className='qrcode-container'>
                    <div>
                        <img src="src/assets/images/qrcde.webp" alt="image" />
                    </div>
                    <div>
                        <h3>Free QR Code</h3>
                        <p>One scan for guests to join the magic.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header