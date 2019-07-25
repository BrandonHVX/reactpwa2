import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import Side from './Side'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import SidebarLayout from './SidebarLayout'
import { CSSTransitionGroup } from 'react-transition-group'
import MaterialTitlePanel from './material_title_panel'
import SidebarContent from './SidebarContent'

const mql = window.matchMedia(`(max-width: 980px)`)
const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    top: 0,
    right: 0,
    bottom: 0
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto'
  }
}

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    }

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this)
    this.renderPropNumber = this.renderPropNumber.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
  }

  onSetOpen(open) {
    this.setState({ open })
  }

  menuButtonClick(ev) {
    ev.preventDefault()
    this.onSetOpen(!this.state.open)
  }

  renderPropCheckbox(prop) {
    const toggleMethod = ev => {
      const newState = {}
      newState[prop] = ev.target.checked
      this.setState(newState)
    }

    return (
      <p key={prop}>
        <label htmlFor={prop}>
          <input
            type="checkbox"
            onChange={toggleMethod}
            checked={this.state[prop]}
            id={prop}
          />
          {prop}
        </label>
      </p>
    )
  }

  renderPropNumber(prop) {
    const setMethod = ev => {
      const newState = {}
      newState[prop] = parseInt(ev.target.value, 10)
      this.setState(newState)
    }

    return (
      <p key={prop}>
        {prop}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    )
  }

  render() {
    const sidebar = <SidebarContent />

    const contentHeader = (
      <button type="button" class="btn-gone" onClick={this.menuButtonClick}>
        M E N U
      </button>
    )

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      contentId: 'custom-sidebar-content-id',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    }

    return (
      <Side {...sidebarProps}>
        {' '}
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content} />
        </MaterialTitlePanel>
      </Side>
    )
  }
}
