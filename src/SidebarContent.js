import React from 'react'
import PropTypes from 'prop-types'
import MaterialTitlePanel from './material_title_panel'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'
import { fadeIn } from 'react-animations'

const styles = {
  sidebar: {
    width: 256,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: 'black',
    textDecoration: 'bold',
    fontFamily: 'Source Sans Pro',
    fontWeight: 900,
    lineHeight: 1.5,
    letterSpacing: '0.075em',
    textTransform: 'uppercase',
    margin: '0 0 1rem 0'
  },

  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    color: '#fff',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255, 0.9)'
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
          H o m e{' '}
        </Link>

        <Link style={styles.sidebarLink} to="/page">
          A b o u t{' '}
        </Link>
        <Link style={styles.sidebarLink} to="/events">
          E v e n t s{' '}
        </Link>
        <Link style={styles.sidebarLink} to="/shop">
          S h o p{' '}
        </Link>
        {/* <div style={styles.divider} />
        {links} */}
      </div>
    </MaterialTitlePanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
