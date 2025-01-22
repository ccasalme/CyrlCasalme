import React from 'react';
import { CCard, CCardBody } from '@coreui/react'
import Footer from './Footer';

export default function AboutMe() {
    return (
      <div>
        <h1>About Me</h1>
        <br />
        <CCard className="aboutBox">
            <CCardBody>
                <h2 className="h2About">Who is CCasalme?</h2>
            </CCardBody>
        </CCard>
        <img />
        <br />
        <CCard className="aboutBox">
            <CCardBody>
                <p className="aboutMe">
                <strong>Hi, I’m Cyrl but you can also call me CyCy</strong>—an experienced professional with a dynamic background in customer service, sales, account management, and technical support. As a passionate creator and writer, I explore various genres and share my insights freely, believing in the power of knowledge to help others.
                Currently pursuing a <em>Full Stack Certification</em> through <strong>University of Toronto, Continuing Education, partnered with Edx,</strong> I am eager to merge my technical expertise with my extensive interpersonal skills to uncover innovative opportunities at the intersection of technology and client success. 
                My diverse experiences have honed my adaptability, creativity, and ability to turn challenges into growth opportunities.
                I thrive in environments where I can collaborate with teams, optimize processes, and help businesses achieve their goals. 
                Whether it’s identifying needs, delivering tailored solutions, or providing hands-on support, I’m driven by the chance to make a significant impact.
                Outside of professional pursuits, I’m a creative enthusiast who loves exploring artistic hobbies and bringing a fresh perspective to every project. Let’s connect and create something meaningful together!
                </p>
            </CCardBody>
        </CCard>
        <br />
        <Footer />
        <p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p>
      </div>
    );
  }
  