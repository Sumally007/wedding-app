import React from 'react'
import "../../src/Footer/Footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className="footer-top">
                <div className="about-container">
                    <div className='logo-container'>
                        {/* <img src="" alt="" /> */}
                        <span>Y-Ya</span>
                    </div>
                    <p>Collect support, capture memories, and bring your event to life through one simple QR experience.</p>
                </div>
                <div className="product-container">
                    <h4>Product</h4>
                    <ul>
                        <li>Features</li>
                        <li>How It Works</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="company-container">
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="contact-container">
                    <h4>Connect</h4>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Instagram</li>
                        <li>TikTok</li>
                        <li>Phone: 0779 710 130</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Y-Ya. All rights reserved.</p>
                <p className='par-icon'>Made with <FaHeart className='icon-heart' /> for celebrations everywhere</p>
            </div>
        </footer>
    )
}

export default Footer