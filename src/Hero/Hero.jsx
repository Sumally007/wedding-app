import React from 'react'
import "../../src/Hero/Hero.css";

const Hero = () => {
    const TagData = [
        { id: 1, name: "Graduations", icon: "🎓" },
        { id: 2, name: "Fundraisers", icon: "🤝" },
        { id: 3, name: "Community Events", icon: "⛪" },
        { id: 4, name: "Weddings", icon: "❤️" }
    ];

    return (
        <section className="hero-container">
            <div className="text-content">
                <p>Perfect for every celebration — trusted by event organizers to make gifting, photo sharing, and live engagement seamless.</p>
            </div>

            <div className="tags-wrapper">
                <div className="tags-track">
                    {TagData.map((item) => (
                        <TagComponent key={item.id} item={item} />
                    ))}
                </div>
                <div className="tags-track">
                    {TagData.map((item) => (
                        <TagComponent key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    )
}

const TagComponent = ({ item }) => {
    return (
        <div className="tag-pill">
            <span className="icon">{item.icon}</span>
            {item.name}
        </div>
    )
}

export default Hero