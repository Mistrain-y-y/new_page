import React from 'react'
import './style.css'
import { Avatar, Row, Col } from 'antd';

const AvatarMsg = () => {
  return (
      <div className="avatar-box">
        <Row>
          <Col span={6}>
          <Avatar shape="square" className="col-6"
        src="https://s3.ax1x.com/2021/01/25/sOPFaj.jpg"
        size={{ xs: 80, sm: 100, md: 130, lg: 180, xl: 200, xxl: 200}}
      />
      </Col>
      <Col span={18}>
      <div className="avatar-msg col-6">
        <h2 className="avatar-name">Mistrain</h2>
        <p className="avatar-description">A blue dinosaur~</p>
      </div>
      </Col>
        </Row>
      </div>
      )
}

export default AvatarMsg