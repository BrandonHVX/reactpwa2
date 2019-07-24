import React from 'react'
import PropTypes from 'prop-types'
import MaterialTitlePanel from './material_title_panel'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  const links = []

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        Mock menu item {ind}
      </a>
    )
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <Link style={styles.sidebarLink} to="/">
          <h3>Home</h3>{' '}
        </Link>

        <Link style={styles.sidebarLink} to="/page">
          <h3>About</h3>{' '}
        </Link>
        <Link style={styles.sidebarLink} to="/events">
          <h3>Events</h3>{' '}
        </Link>
        <Link style={styles.sidebarLink} to="/shop">
          <h3>Shop</h3>{' '}
        </Link>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
