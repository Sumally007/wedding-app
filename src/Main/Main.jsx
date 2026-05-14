import React from 'react'
import "../../src/Main/Main.css";
import { IoIosTrendingUp } from "react-icons/io";
import { LuBanknote } from "react-icons/lu";
import { BsCheck2 } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuTvMinimalPlay } from "react-icons/lu";

const Main = () => {
    const barData = [
        { id: 1, stats: "Gifts Collected", percent: "78%" },
        { id: 2, stats: "Photos Shared", percent: "64%" },
        { id: 3, stats: "Live Views", percent: "92%" }
    ];

    const dateData = [
        { id: 1, day: "Mon" },
        { id: 2, day: "Tue" },
        { id: 3, day: "Wed" },
        { id: 4, day: "Thu" },
        { id: 5, day: "Fir" },
        { id: 6, day: "Sat" },
        { id: 7, day: "Sun" }
    ];

    const featureData = [
        { id: 1, heading: "Receive Gifts With Ease", comment: "Guests scan the QR code, copy your lipa number, send their gift through mobile money, and submit their name, amount, and message in seconds.", icon: <LuBanknote className='icon' /> },
        { id: 2, heading: "Collect Every Moment", comment: "Let guests upload photos and videos from their phones so you gather authentic memories from every angle of the event.", icon: <CiCamera className='icon' /> },
        { id: 3, heading: "Bring Contributions to Life", comment: "Contributions appear on the live MC feed as they come in. Keep the crowd engaged with instant shoutouts and celebration moments.", icon: <LuTvMinimalPlay className='icon' /> }
    ]

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
                    {barData.map((item) => (
                        <BarComponent key={item.id} item={item} />
                    ))}
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
                        {dateData.map((item) => (
                            <DateComponent key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='features-section'>
                <h1 className="main-title">Everything Your Event Needs in One Place</h1>
                <p className="subtitle">Whether you want to collect gifts, capture guest memories, or create a more interactive MC experience — Y-Ya brings it together in one simple flow.</p>

                <div className="features-list">
                    {featureData.map((item) => (
                        <FeatureComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const BarComponent = ({ item }) => {
    return (
        <div className='first-top-container'>
            <div className='gift-container-top'>
                <p>{item.stats}</p>
                <p className='numb'>{item.percent}</p>
            </div>
            <div className='outside-bar'>
                <div className='inside-bar'></div>
            </div>
        </div>
    )
};

const DateComponent = ({ item }) => {
    return (
        <div>
            <div className='first-bar'></div>
            <p>{item.day}</p>
        </div>
    )
};

const FeatureComponent = ({ item }) => {
    return (
        <div className="feature-item">
            <div className="icon-box">
                {item.icon}
            </div>
            <div className="feature-text">
                <h3>{item.heading}</h3>
                <p>{item.comment}</p>
            </div>
        </div>
    )
}

export default Main