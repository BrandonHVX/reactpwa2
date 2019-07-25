import React from 'react'
import './sass/main.scss'
import './css/main.css'
import pic01 from './images/pic01.jpg'
import bgwhite from './images/bgwhite.mp4'
import mdglogo from './images/mdgblack.png'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import MenuBar from './MenuBar.js'
import Sidebar from './Sidebar.js'
import { fadeIn } from 'react-animations'
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const fadeInAni = keyframes`${fadeIn}`

const FadeInDiv = styled.div`
  animation: 2s ${fadeInAni};
`

export default function Home() {
  return (
    <FadeInDiv>
      <div>
        <body class="is-preload">
          {' '}
          <div id="wrapper">
            {' '}
            <Sidebar />
            <header class="v-header container">
              {' '}
              <div class="fullscreen-video-wrap">
                {' '}
                <video
                  src={bgwhite}
                  playsInline="true"
                  class="videoInsert"
                  autoplay="true"
                  loop="true"
                  muted="true"
                  type="video/mp4"
                />
              </div>
              <div class="header-content">
                <img src={mdglogo} className="App-logo" />
              </div>
            </header>
            <MenuBar />
            <div id="main" />
            <img
              class="homeimage"
              src="https://source.unsplash.com/random"
              alt="Example image"
            />
            <img
              class="homeimage"
              src="https://source.unsplash.com/random"
              alt="Example image"
            />
            <img
              class="homeimage"
              src="https://source.unsplash.com/random"
              alt="Example image"
            />
            <img
              class="homeimage"
              src="https://source.unsplash.com/random"
              alt="Example image"
            />
            <div id="copyright">
              <ul>
                <li>&copy; Untitled</li>
                <li>
                  Design: <a href="https://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </div>
        </body>
      </div>
    </FadeInDiv>
  )
}
