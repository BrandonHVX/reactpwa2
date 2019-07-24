import React from 'react'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'

export default function SidebarLayout() {
  return (
    <div className="navlist">
      <ul className="navlist">
        <li className="navlist">
          <Link to="/">
            <h3>Home</h3>{' '}
          </Link>
        </li>
        <li className="navlist">
          {' '}
          <Link to="/page">
            <h3>About</h3>{' '}
          </Link>
        </li>
        <li className="navlist">
          <Link to="/events">
            <h3>Events</h3>{' '}
          </Link>
        </li>
        <li className="navlist">
          <Link to="/shop">
            <h3>Shop</h3>{' '}
          </Link>
        </li>
      </ul>
    </div>
  )
}
