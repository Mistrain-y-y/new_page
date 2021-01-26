import React from 'react'
import "./style.css"
import BlogList from '../../components/BlogList'

const Blog = props => {
  console.log(props)
  return (
    <div>
      <BlogList/>
    </div>
  )
}

export default Blog