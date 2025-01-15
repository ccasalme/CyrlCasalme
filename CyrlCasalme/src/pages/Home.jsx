import React from 'react';
import {Link} from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import PortfolioImage from '../assets/Portfolioimage.png';
import BlogImage from '../assets/Blogwebsite.png';
import GHIcon from '../assets/GH.png';
import LinkedInIcon from '../assets/Linkedin.png';
import MediumIcon from '../assets/MediumIcon.png';
import YouTubeIcon from '../assets/YT.png';
export default function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <br/>
        <CCard className="box1">
          <CCardBody>
            <h2 className="home-intro">
                Welcome to my portfolio! I am Cyrl, a full stack developer
                with a passion for creating and designing websites.
            </h2>
        </CCardBody>
        </CCard>
        <br />
        <br/>
        <img src={PortfolioImage} alt="Portfolio Image" className="Portfolio-image" />
        <br />
        <br />
        <CCard className="container1">
          <CCardBody className="where-to-find-me">
            <h4 className="where">Where to find me:</h4>
          </CCardBody>
          <br />
        </CCard>
        <br />
        <div className="container3">
            <img src={BlogImage} alt="Blog Icon" className="Blog-icon" />
            <img src={GHIcon} alt="GitHub Icon" className="GH-icon" />
            <img src={LinkedInIcon} alt="LinkedIn Icon" className="LinkedIn-icon" />
            <img src={MediumIcon} alt="Medium Icon" className="Medium-icon" />
            <img src={YouTubeIcon} alt="YouTube Icon" className="YouTube-icon" />
        </div>
        <br />
        <br />
        <p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p>
      </div>
    );
  }
  