import React from 'react'
import './style.css'
import {Row, Col} from 'antd'
import {withRouter} from 'react-router-dom'
import Calen from './Calen'

const AvatarMsg = props => {
  const toAbout = () => {
    props
      .history
      .push("/about")
  }
  return (
    <div className="avatar-box">
      <Row>
        <Col span={6}>
          <img
            alt="avatar img"
            className="col-6 avatar-img"
            src="https://s3.ax1x.com/2021/01/25/sOPFaj.jpg"
            title="A blue dinosaur who want to be a front-end engineer!"
          />
        </Col>
        <Col span={6}>
          <div className="avatar-msg col-6">
            <h2 className="avatar-name" onClick={toAbout} title="know more">Mistrain</h2>
            <p className="avatar-description">A blue dinosaur~</p>
          </div>
        </Col>
        <Col span={12}>
          <Calen/>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(AvatarMsg)