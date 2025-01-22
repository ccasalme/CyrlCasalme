import React from 'react';
import BlogImage from '../assets/Blogwebsite.png';
import GHIcon from '../assets/GH.png';
import LinkedInIcon from '../assets/Linkedin.png';
import MediumIcon from '../assets/MediumIcon.png';
import YouTubeIcon from '../assets/YT.png';

export default function Footer() {
    return (
        <div>
            <div className="container3">
                <h4 className="where">Where to find me:</h4>
                    <img src={BlogImage} alt="Blog Icon" className="Blog-icon" />
                    <img src={GHIcon} alt="GitHub Icon" className="GH-icon" />
                    <img src={LinkedInIcon} alt="LinkedIn Icon" className="LinkedIn-icon" />
                    <img src={MediumIcon} alt="Medium Icon" className="Medium-icon" />
                    <img src={YouTubeIcon} alt="YouTube Icon" className="YouTube-icon" />
            </div>
                <br />
        </div>
    );
};