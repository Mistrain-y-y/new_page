import React, {PureComponent} from 'react'
import './style.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {articleData: ''}
  }
  componentDidMount() {
    // 一挂载就向后台请求文章数据, 并且只需要在该页面展示
    axios(`/blog/page/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      this.setState({articleData: res.data})
    })
  }
  render() {
    return (
      <article>
        <div className="article-title-box">
          <h1>如何实现bilibili最新头部景深效果~炫酷</h1>
          <span className="article-author-msg">Mistrain</span>
          <span className="article-author-msg">2020-10-01</span>
          <span className="article-author-msg"><a href="https://blog.csdn.net/javaMistrain/article/details/108896922#comments_14701715" target="_blank" rel="noreferrer">查看CSDN原文</a></span>
        </div>
        <div>{this.state.articleData}</div>
      </article>
    )
  }
}

export default withRouter(Article)