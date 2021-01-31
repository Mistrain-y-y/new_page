const express = require("express")
const path = require("path")
const blog = express.Router()
const articles = require("../data/articles")

// blog.get("/", (req, res) => {// 呈现首页
//   res.sendFile(path.join(__dirname, "./../build/index.html"))
// })

// blog.get('/detail/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, "./../build/index.html"))
// })

// api
// 请求页面文章
blog.get(`/page/:id`, (req, res) => {
  // res.send(articles[req.params.id])
  res.send('<p>hello world!</p>')
})

module.exports = blog