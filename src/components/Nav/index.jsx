import React from 'react'
import './style.css'
import {withRouter, NavLink} from 'react-router-dom'
import iconDino from '../../static/images/icon-dino.png'
import {
  HomeOutlined,
  HighlightOutlined,
  ContactsOutlined
} from '@ant-design/icons';

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
        <NavLink className="nav-item" to="/" exact><HomeOutlined className="icon-font-style"/>Home</NavLink>
        <NavLink className="nav-item" to="/blog"><HighlightOutlined className="icon-font-style"/>Blog</NavLink>
        <NavLink className="nav-item" to="/about"><ContactsOutlined className="icon-font-style"/>About</NavLink>
    </header>
  )
}

export default withRouter(Nav)