import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import SidebarLayout from './SidebarLayout'
import { CSSTransitionGroup } from 'react-transition-group'
import MaterialTitlePanel from './material_title_panel'
const mql = window.matchMedia(`(max-width: 980px)`)

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      styles: true,
      transitions: true,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches })
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <b>
            <SidebarLayout />
          </b>
        }
        transitions={true}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: 'white'
          }
        }}
      >
        <button
          type="button"
          class="btn-gone"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          M E N U
        </button>

        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        />
      </Sidebar>
    )
  }
}
