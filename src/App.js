import React from 'react'
import logo from './logo.svg'
import './App.css'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Home from './Home.js'
import Page from './Page.js'
import Events from './Events.js'
import Sidebar from './Sidebar.js'
import Shop from './Shop.js'
import Sign from './SignUp.js'
import './sass/main.scss'
import './css/main.css'
import mdglogo from './images/mdgblack.png'

import bgwhite from './images/bgwhite.mp4'
import pic01 from './images/pic01.jpg'
import Drawer from 'react-motion-drawer'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  NavLink
} from 'react-router-dom'
import MenuBar from './MenuBar'

function App() {
  return (
    <Router>
      <MenuBar />
      <Route exact path="/" component={Home} />
      <Route path="/page" component={Page} />
      <Route path="/events" component={Events} />
      <Route path="/shop" component={Shop} />
      <Route path="/sign" component={Sign} />{' '}
    </Router>
  )
}

export default App
