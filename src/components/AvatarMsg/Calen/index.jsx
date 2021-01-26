import React from 'react'
import './style.css'
import {Card} from 'antd'
import {withRouter} from 'react-router-dom'

const Calen = props => {
  const toBlog = () => {
    props.history.replace('/blog')
  }
  return (
    <Card 
    size="small" title="New Articles"
    extra={<span className="see-more" onClick={toBlog}>More</span>}
    style={{ width: '100%'}}>
      <p className="article-title">如何实现bilibili最新头部景深效果~炫酷</p>
      <p className="article-title">JS 命令式 声明式 函数式 编程?</p>
      <p className="article-title">恐龙和恐龙的朋友们~</p>
    </Card>
  )
}

export default withRouter(Calen)