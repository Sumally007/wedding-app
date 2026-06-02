import React from 'react'
import "./Main.css";
import { IoIosTrendingUp } from "react-icons/io";
import { LuBanknote } from "react-icons/lu";
import { BsCheck2 } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuTvMinimalPlay } from "react-icons/lu";
import { H2, H4, ParagraphNormal } from "../Typography";

const Main = () => {
    const barData = [
        { id: 1, stats: "Gifts Collected", percent: "78%" },
        { id: 2, stats: "Photos Shared", percent: "64%" },
        { id: 3, stats: "Live Views", percent: "92%" }
    ];

    const dateData = [
        { id: 1, day: "Mon", height: "32.1882px" },
        { id: 2, day: "Tue", height: "44.0471px" },
        { id: 3, day: "Wed", height: "37.2706px" },
        { id: 4, day: "Thu", height: "59.2941px" },
        { id: 5, day: "Fir", height: "52.5176px" },
        { id: 6, day: "Sat", height: "72px", color: "lab(57 3.31 -65.44)" },
        { id: 7, day: "Sun", height: "62.6824px" }
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
                        <BarComponent
                            key={item.id}
                            item={item}
                        />
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
                <H2 className="main-title">Everything Your Event Needs in One Place</H2>
                {/* <h1 className="main-title">Everything Your Event Needs in One Place</h1> */}
                <ParagraphNormal className="subtitle">Whether you want to collect gifts, capture guest memories, or create a more interactive MC experience — Y-Ya brings it together in one simple flow.</ParagraphNormal>
                {/* <p className="subtitle">Whether you want to collect gifts, capture guest memories, or create a more interactive MC experience — Y-Ya brings it together in one simple flow.</p> */}

                <div className="features-list">
                    {featureData.map((item) => (
                        <FeatureComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const BarComponent = ({ item, classPoint }) => {
    let classSelector = classPoint;

    return (
        <div className='first-top-container'>
            <div className='gift-container-top'>
                <p>{item.stats}</p>
                <p className='numb'>{item.percent}</p>
            </div>
            <div className='outside-bar'>
                <div className="inside-bar" style={{ width: item.percent }}></div>
            </div>
        </div>
    )
};

const DateComponent = ({ item }) => {
    return (
        <div>
            <div className='first-bar' style={{ height: item.height, backgroundColor: item.color ? item.color : 'lab(21 -2.36 -19.67)' }}></div>
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
                <H4>{item.heading}</H4>
                {/* <h3>{item.heading}</h3> */}
                <ParagraphNormal>{item.comment}</ParagraphNormal>
                {/* <p>{item.comment}</p> */}
            </div>
        </div>
    )
}

export default Main