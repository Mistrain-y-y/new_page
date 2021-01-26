import React from 'react'
import './style.css'
import {withRouter, NavLink} from 'react-router-dom'
import iconDino from '../../static/images/icon-dino.png'

const Nav = props => {
  return (
    <header className="light header-vertical">
          <a href="/">
            <img
              src={iconDino}
              alt="To home page"
              title="To home page"
              className="icon-dino"/>
          </a>
        <NavLink className="nav-item" to="/" exact>Home</NavLink>
        <NavLink className="nav-item" to="/blog">Blog</NavLink>
        <NavLink className="nav-item" to="/compose">Compose</NavLink>
        <NavLink className="nav-item" to="/about">About</NavLink>
    </header>
  )
}

export default withRouter(Nav)