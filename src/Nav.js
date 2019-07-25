import React from 'react'
import Page from './Page'
import Home from './Page'
import './sass/main.scss'
import './css/main.css'
import mdglogo from './images/mdgblack.png'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <Router>
      <Nav>
        <div id="nav">
          {' '}
          <img src={mdglogo} />
          <ul class="links">
            <Link to="/">
              {' '}
              <li>
                <a> Home</a>
              </li>
            </Link>
            <Link to="page">
              <li>
                <a> About</a>{' '}
              </li>
            </Link>
            <Link to="events">
              <li>
                <a> Events</a>{' '}
              </li>
            </Link>
            <Link to="shop">
              <li>
                <a> Shop</a>{' '}
              </li>
            </Link>
            <Link to="sign">
              <li>
                <a> SignUp</a>{' '}
              </li>
            </Link>
          </ul>
          <ul class="icons">
            <li>
              <a
                href="http://www.twitter.com/milqdagame"
                class="icon brands fa-twitter"
              >
                <span class="label">Twitter</span>
              </a>
            </li>

            <li>
              <a
                href="http://www.instagram.com/milqdagame"
                class="icon brands fa-instagram"
              >
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-envelope">
                <span class="label">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </Router>
  )
}
