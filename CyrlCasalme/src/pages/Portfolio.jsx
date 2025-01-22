import React, { useState } from 'react';
import Footer from './Footer';
import movie from '../assets/moviematch.png';
import employee from '../assets/employee.png';
import readme from '../assets/readme.png';
import vehicle from '../assets/vehicle.png';
import webpic from '../assets/webpic.png';
import weather from '../assets/weather.png';

function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <br />
            <div className="container3">
            <a href="https://github.com/ccasalme/Movie-MatchMaker">Movie Match Maker
            <img src={movie} alt="Movie Match" className="movie" />
            </a>
            </div>
            <br />
            <div className="container3">
            <br />
            <a href="https://github.com/ccasalme/employee-tracker">Employee Directory
            <img src={employee} alt="Employee Directory" className="employee-directory" />
            </a>
            </div>
            <br />
            <div className="container3">
            <a href="https://github.com/ccasalme/readme-experiment">Readme Generator
            <img src={readme} alt="Readme Generator" className="readme-generator" />
            </a>
            </div>
            <br />
            <div className="container3">
            <a href="https://github.com/ccasalme/vehicle-builder">Vehicle Builder
            <img src={vehicle} alt="Vehicle Builder" className="vehicle-builder" />
            </a>
            </div>
            <br />
            <div className="container3">
            <a href="https://github.com/ccasalme/CyrlCasalmer">React Portfolio
            <img src={webpic} alt="React Portfolio" className="react-portfolio" />
            </a>
            </div>
            <br />
            <div className="container3">
            <a href="https://github.com/ccasalme/weatherdash/tree/main">Weather Dashboard - Working Progress
            <img src={weather} alt="Weather Dashboard" className="weather-dashboard" />
            </a>
            </div>
            <br />
           
            <Footer />
            <p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p>
        </>
    );
}

export default Portfolio;

  