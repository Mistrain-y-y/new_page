import React from 'react'
import './style.css'
import { Timeline } from 'antd'

const Slider = props => {
  return (
    <Timeline>
      <Timeline.Item>发布了新的博客&lt;如何实现bilibili最新头部景深效果~炫酷&gt; 2020-10-01</Timeline.Item>
      <Timeline.Item>分享了新的故事&lt;恐龙和恐龙的朋友们~&gt; 2020-09-26</Timeline.Item>
    </Timeline>
  )
}

export default Slider