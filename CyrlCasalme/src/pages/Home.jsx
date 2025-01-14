import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
export default function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <CCard className="box1">
          <CCardBody>
            <h1 className="home-intro">
                Welcome to my portfolio! I am Cyrl Casalme, a full stack developer
                with a passion for creating and designing websites.
            </h1>
        </CCardBody>
        </CCard>
        <br />
        <br />
        <br/>
        <CCard ClassName="box2">
            <CCardBody>
            </CCardBody>
        </CCard>
        <br />
        <br />
        <CCard className="container1">
          <CCardBody className="where-to-find-me">
            <CCardBody className="where-to-find-me">
            <h3>
                    Where to find me:
            </h3>
            </CCardBody>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/cyrl-casalme-948835181/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/ccasalme">Github</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@CCasalme">YouTube</a>
                    </li>
                    <li>
                        <a href="https://stealmynoteshere.com/">Blogging Website</a>
                    </li>
                </ul>
          </CCardBody>
        </CCard>
      </div>
    );
  }
  