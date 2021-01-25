import React from 'react'
import {Layout, Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import './style.css'
import iconDino from '../../static/images/icon-dino.png'

const { Header} = Layout;

const Nav = props => {
  console.log(props)
  const toPath = path => {
    props.history.push(path)
  }
  return (
    <Header className="light">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <a href="/">
        <img src={iconDino} alt="To home page" title="To home page" className="icon-dino"/>
        </a>
        <Menu.Item onClick={() => toPath("/")} key="1">Home</Menu.Item>
        <Menu.Item onClick={() => toPath("/compose")} key="2">Compose</Menu.Item>
        <Menu.Item onClick={() => toPath("/Blog")} key="3">Blog</Menu.Item>
        <Menu.Item onClick={() => toPath("/about")} key="4">About</Menu.Item>
      </Menu>
    </Header>
  )
}

export default withRouter(Nav)