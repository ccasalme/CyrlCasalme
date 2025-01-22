import React from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import PortfolioImage from '../assets/Portfolioimage.png';
import Footer from './Footer';
export default function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <br/>
        <CCard className="box1">
          <CCardBody>
            <h2 className="home-intro">
                Welcome to my portfolio! I am Cyrl, a Full-Stack Developer
                with a passion for creating and designing websites.
            </h2>
        </CCardBody>
        </CCard>
        <br />
        <br/>
        <img src={PortfolioImage} alt="Portfolio Image" className="Portfolio-image" />
        <br />
        <Footer />
        <p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p>
      </div>
    );
  }
  