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
      this.setState({articleData: res.data})
    })
  }
  render() {
    return (
      <article>
        <div dangerouslySetInnerHTML={{__html: this.state.articleData}}></div>
      </article>
    )
  }
}

export default withRouter(Article)