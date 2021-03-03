import React from 'react'
import './style.css'
import { Timeline } from 'antd'

const Slider = props => {
  return (
    <Timeline>
      <Timeline.Item>发布了新的博客&lt;<a href="/blog/detail/a03">JS 命令式 声明式 函数式 编程?</a>&gt; 2020-12-05</Timeline.Item>
      <Timeline.Item>发布了新的博客&lt;<a href="/blog/detail/a02">如何实现bilibili最新头部景深效果~炫酷</a>&gt; 2020-10-01</Timeline.Item>
      <Timeline.Item>分享了新的故事&lt;<a href="/blog/detail/a01">恐龙和恐龙的朋友们~</a>&gt; 2020-09-26</Timeline.Item>
    </Timeline>
  )
}

export default Slider