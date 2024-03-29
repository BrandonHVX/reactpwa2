import React from 'react'
import Nav from './Nav.js'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import MenuBar from './MenuBar.js'
export default function Sign() {
  return (
    <div>
      <body class="is-preload">
        <div id="wrapper">
          <div id="intro">
            <h1>
              This is
              <br />
              Massively
            </h1>
            <p>
              A free, fully responsive HTML5 + CSS3 site template designed by{' '}
              <a href="https://twitter.com/ajlkn">@ajlkn</a> for{' '}
              <a href="https://html5up.net">HTML5 UP</a>
              <br />
              and released for free under the{' '}
              <a href="https://html5up.net/license">Creative Commons license</a>
              .
            </p>

            <ul class="actions">
              <li>
                <a
                  href="#header"
                  class="button icon solid solo fa-arrow-down scrolly"
                >
                  Continue
                </a>
              </li>
            </ul>
          </div>
          <MenuBar />
          <div id="main">
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
          </div>
        </div>

        <script src="assets/js/jquery.min.js" />
        <script src="assets/js/jquery.scrollex.min.js" />
        <script src="assets/js/jquery.scrolly.min.js" />
        <script src="assets/js/browser.min.js" />
        <script src="assets/js/breakpoints.min.js" />
        <script src="assets/js/util.js" />
        <script src="assets/js/main.js" />
      </body>
    </div>
  )
}
