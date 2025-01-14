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
        <CCardBody>
            <img />
        </CCardBody>
        <br />
        <br />
        <CCard className="container1">
          <CCardBody>
                <h2 className="home-intro">
                    Where to find me:
                </h2>
                <ul>
                    <li>
                        <a>LinkedIn</a>
                    </li>
                    <li>
                        <a>Github</a>
                    </li>
                    <li>
                        <a>YouTube</a>
                    </li>
                    <li>
                        <a>Blogging Website</a>
                    </li>
                </ul>
          </CCardBody>
        </CCard>
      </div>
    );
  }
  