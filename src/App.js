import React from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Nav.js'
import Home from './Home.js'
import Page from './Page.js'
import Events from './Events.js'
import Shop from './Shop.js'
import Sign from './SignUp.js'
import './sass/main.scss'
import './css/main.css'
import mdglogo from './images/mdgblack.png'
import mdgbg from './images/mdgbg.mp4'
import bgwhite from './images/bgwhite.mp4'
import pic01 from './images/pic01.jpg'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div />
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a>
                    <Link to="/"> Home</Link>{' '}
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/page">About </Link>{' '}
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/events">Events</Link>
                  </a>
                </li>
                <li>
                  <a>
                    {' '}
                    <Link to="/shop"> Shop</Link>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header class="v-header container">
        <div class="fullscreen-video-wrap">
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

      <div id="nav">
        <ul class="links">
          {' '}
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

      <Route exact path="/" component={Home} />
      <Route path="/page" component={Page} />
      <Route path="/events" component={Events} />
      <Route path="/shop" component={Shop} />
      <Route path="/sign" component={Sign} />
    </Router>
  )
}

export default App

function Main() {
  return (
    <div>
      <div id="main">
        <article class="post featured">
          <header class="major">
            <span class="date">April 25, 2017</span>
            <h2>
              <a href="#">
                And this is a<br />
                massive headline
              </a>
            </h2>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam
              <br />
              facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
              <br />
              amet nullam sed etiam veroeros.
            </p>
          </header>
          <a href="#" class="image main">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <ul class="actions special">
            <li>
              <a href="#" class="button large">
                Full Story
              </a>
            </li>
          </ul>
        </article>
      </div>

      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="3" />
              </div>
            </div>
            <ul class="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section class="split contact">
          <section class="alt">
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #87257
              <br />
              Nashville, TN 00000-0000
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="#">(000) 000-0000</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">info@untitled.tld</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul class="icons alt">
              <li>
                <a href="#" class="icon brands alt fa-twitter">
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-facebook-f">
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-instagram">
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-github">
                  <span class="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>

      <div id="copyright">
        <ul>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>

      <script src="assets/js/jquery.min.js" />
      <script src="assets/js/jquery.scrollex.min.js" />
      <script src="assets/js/jquery.scrolly.min.js" />
      <script src="assets/js/browser.min.js" />
      <script src="assets/js/breakpoints.min.js" />
      <script src="assets/js/util.js" />
      <script src="assets/js/main.js" />
    </div>
  )
}

function Footer() {
  return (
    <div>
      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="3" />
              </div>
            </div>
            <ul class="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section class="split contact">
          <section class="alt">
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #87257
              <br />
              Nashville, TN 00000-0000
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="#">(000) 000-0000</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">info@untitled.tld</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul class="icons alt">
              <li>
                <a href="#" class="icon brands alt fa-twitter">
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-facebook-f">
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-instagram">
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands alt fa-github">
                  <span class="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    </div>
  )
}
