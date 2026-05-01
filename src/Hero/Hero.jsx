import React from 'react'
import "../../src/Hero/Hero.css";

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="text-content">
                <p>Perfect for every celebration — trusted by event organizers to make gifting, photo sharing, and live engagement seamless.</p>
            </div>

            <div className="tags-wrapper">
                <div className="tags-track">
                    <div className="tag-pill">
                        <span className="icon">🎓</span>
                        Graduations
                    </div>
                    <div className="tag-pill">
                        <span className="icon">🤝</span>
                        Fundraisers
                    </div>
                    <div className="tag-pill">
                        <span className="icon">⛪</span>
                        Community Events
                    </div>
                    <div className="tag-pill">
                        <span className="icon">❤️</span>
                        Weddings
                    </div>

                </div>
                <div className="tags-track">
                    <div className="tag-pill">
                        <span className="icon">🎓</span>
                        Graduations
                    </div>
                    <div className="tag-pill">
                        <span className="icon">🤝</span>
                        Fundraisers
                    </div>
                    <div className="tag-pill">
                        <span className="icon">⛪</span>
                        Community Events
                    </div>
                    <div className="tag-pill">
                        <span className="icon">❤️</span>
                        Weddings
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero