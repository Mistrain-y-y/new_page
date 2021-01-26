import React from 'react'
import './style.css'
import {Descriptions, Row, Col} from 'antd'

const Author = () => {
  return (
    <div className="about-box">
      <h1>About the author</h1>
      <Row>
      <Col span={8}>
      <img className="author-img" title="you can connect me!" src="https://s3.ax1x.com/2021/01/25/sOPFaj.jpg" alt="author"/>
      </Col>
      <Col span={16}>
      <Descriptions layout="vertical" labelStyle={{fontSize: "20px", color: "#aaa", padding: "20px 50px"}} contentStyle={{color: "#666", padding: "0 50px"}}>
        <Descriptions.Item label="Name">Mistrain</Descriptions.Item>
        <Descriptions.Item label="QQ">1053401058</Descriptions.Item>
        <Descriptions.Item label="Address">Changsha, Hunan</Descriptions.Item>
        <Descriptions.Item label="Skill">html CSS JavaScript node.js React AI PR Edius PS</Descriptions.Item>
        <Descriptions.Item label="GitHub">
          <a href="https://github.com/Mistrain-y-y" title="to github" rel="noreferrer" target="_blank">https://github.com/Mistrain-y-y</a>
        </Descriptions.Item>
        <Descriptions.Item label="Nowcoder">
          <a href="https://www.nowcoder.com/profile/686030081" title="to github" rel="noreferrer" target="_blank">https://www.nowcoder.com/profile/686030081</a>
        </Descriptions.Item>
      </Descriptions></Col>
      </Row>
    </div>
  )
}

export default Author