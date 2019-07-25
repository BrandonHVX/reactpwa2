import React from 'react'
import Nav from './Nav.js'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import MenuBar from './MenuBar.js'
import Sidebar from './Sidebar.js'
import milqpic from './images/milq.jpg'
import mdglogo from './images/mdgblack.gif'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'
import { fadeIn } from 'react-animations'

const fadeRight = keyframes`${fadeInRight}`

const BouncyDiv = styled.div`
  animation: 1s ${fadeRight};
`

const fadeInAni = keyframes`${fadeIn}`

const FadeInDiv = styled.div`
  animation: 2s ${fadeInAni};
`

export default function Page() {
  return (
    <FadeInDiv>
      <div>
        {' '}
        <div>
          {' '}
          <body class="is-preload">
            {' '}
            <div id="wrapper">
              <Sidebar />
              <header class="page-head">
                {' '}
                <div class="header">
                  <img src={mdglogo} width={50} />{' '}
                </div>
              </header>
              <MenuBar />
              <div id="main">
                <section class="post">
                  <header class="major">
                    <h1>About Page</h1>
                    <p>
                      Aenean ornare velit lacus varius enim ullamcorper proin
                      aliquam
                      <br />
                      facilisis ante sed etiam magna interdum congue. Lorem
                      ipsum dolor
                      <br />
                      amet nullam sed etiam veroeros.
                    </p>
                  </header>
                  <div class="image main">
                    <img src={milqpic} alt="" />
                  </div>
                  <p>
                    Donec eget ex magna. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Pellentesque venenatis dolor
                    imperdiet dolor mattis sagittis. Praesent rutrum sem diam,
                    vitae egestas enim auctor sit amet. Pellentesque leo mauris,
                    consectetur id ipsum sit amet, fergiat. Pellentesque in mi
                    eu massa lacinia malesuada et a elit. Donec urna ex, lacinia
                    in purus ac, pretium pulvinar mauris. Nunc lorem mauris,
                    fringilla in aliquam at, euismod in lectus. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Curabitur sapien risus, commodo
                    eget turpis at, elementum convallis enim turpis, lorem ipsum
                    dolor sit amet nullam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis dapibus rutrum facilisis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Etiam tristique libero eu nibh porttitor
                    fermentum. Nullam venenatis erat id vehicula viverra. Nunc
                    ultrices eros ut ultricies condimentum. Mauris risus lacus,
                    blandit sit amet venenatis non, bibendum vitae dolor. Nunc
                    lorem mauris, fringilla in aliquam at, euismod in lectus.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. In non lorem sit amet
                    elit placerat maximus. Pellentesque aliquam maximus risus.
                    Donec eget ex magna. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Pellentesque venenatis dolor
                    imperdiet dolor mattis sagittis. Praesent rutrum sem diam,
                    vitae egestas enim auctor sit amet. Pellentesque leo mauris,
                    consectetur id ipsum.
                  </p>
                </section>
              </div>

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
      </div>
    </FadeInDiv>
  )
}
