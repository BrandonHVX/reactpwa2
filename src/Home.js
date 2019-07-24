import React from 'react'

import film from './images/film.svg'
import mixboard from './images/mixboard.svg'
import market from './images/market.svg'
import './sass/main.scss'
import './css/main.css'
import pic01 from './images/pic01.jpg'
import mdgbg from './images/mdgbg.mp4'
import bgwhite from './images/bgwhite.mp4'
import mdglogo from './images/mdgblack.png'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import MenuBar from './MenuBar.js'
import Sidebar from './Sidebar.js'

export default function Home() {
  return (
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
              />
            </div>
            <div class="header-content">
              {' '}
              <img src={mdglogo} className="App-logo" />
            </div>
          </header>
          <MenuBar />
          <div id="main" />
          <img class="homeimage" src={film} alt="Example image" />
          <img class="homeimage" src={market} alt="Example image" />
          <img class="homeimage" src={mixboard} alt="Example image" />
          <img class="homeimage" src={mixboard} alt="Example image" />
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
  )
}
