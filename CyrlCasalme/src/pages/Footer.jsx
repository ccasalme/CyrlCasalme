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
                <a href="https://stealmynoteshere.com">Blogging Website
                    <img class="blog" src={BlogImage} alt="Blog Icon" className="Blog-icon" />
                </a>
                <br />
                <a href="https://github.com/ccasalme">Github
                <img src={GHIcon} alt="GitHub Icon" className="GH-icon" />
                </a>
                <br />
                <a href="https://www.linkedin.com/in/cyrl-casalme-948835181/">LinkedIn Profile
                <img src={LinkedInIcon} alt="LinkedIn Icon" className="LinkedIn-icon" />
                </a>
                <a href="https://medium.com/hermes-is-inside-the-membrane">Medium
                <img src={MediumIcon} alt="Medium Icon" className="Medium-icon" />
                </a>
                <a href="https://www.youtube.com/@CCasalme">YouTube
                <img src={YouTubeIcon} alt="YouTube Icon" className="YouTube-icon" />
                </a>
                
            </div>
                <br />
        </div>
    );
};