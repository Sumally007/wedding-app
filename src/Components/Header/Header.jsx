import React from 'react'
import "./Header.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import Buttons from '../Buttons';
import { H1 } from '../Typography/H1';
// import '../Typography/Typography.css';

const Header = () => {
    const MiddleData = [
        { id: 1, name: "John Doe", comment: "Wishing you the best!", amount: "+TZS 150,000", profile: "JD" },
        { id: 2, name: "Sarah Adams", comment: "Congratulations guys!", amount: "+TZS 50,000", profile: "SA" },
        { id: 3, name: "Mike & Kim", comment: "So happy for you!", amount: "+TZS 200,000", profile: "MK" },
        { id: 4, name: "Amina Ndungu", comment: "Love wins always!", amount: "+TZS 75,000", profile: "AN" }
    ];

    return (
        <section className='header-sect'>
            <H1 className="heading">Every Event Moment, <span>Seamlessly Connected</span></H1>
            {/* <h1 className='heading'>Every Event Moment, <span>Seamlessly Connected</span></h1> */}
            <p className='content'>Give your guests the easiest way to share photos, send mobile money gifts, and celebrate together — all from one simple scan.</p>
            <div className='buttons-container'>

                <Buttons
                    words="Wire an Event"
                    classname="btn" >
                </Buttons>

                <Buttons
                    words={<span>Contact Us</span>}
                    classname="btn btn-icon"
                    icon={<FiMessageSquare className='message-icon' />} >
                </Buttons>
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
                            <img className='weading-image' src="/images/weading-image.webp" alt="image" />
                            <img className='weading-image position' src="/images/weading-image2.webp" alt="" />
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
                        {MiddleData.map((item) => (
                            <MiddleComponent key={item.id} item={item} />
                        ))}
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
                        <img src="/images/qrcde.webp" alt="image" />
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

const MiddleComponent = ({ item }) => {
    return (
        <div className='middle-container-content'>
            <div className='profile-detailes'>
                <div className='profile-picture'>
                    {item.profile}
                </div>
                <div className='picture-detailes'>
                    <h3>{item.name}</h3>
                    <p>{item.comment}</p>
                </div>
            </div>
            <div className='amount-conributed'>
                <h3 style={{ color: "lab(57 3.31 -65.44)" }}>{item.amount}</h3>
            </div>
        </div>
    )
}

export default Header