const express = require("express")
const path = require("path")
const blog = express.Router()

blog.get("/", (req, res) => {// 呈现首页
  res.sendFile(path.join(__dirname, "./../../build/index.html"))
})

blog.get('/detail/:id', (req, res) => {
  res.sendFile(path.join(__dirname, "./../../build/index.html"))
})// 呈现首页

// api
// 额外请求页面文章
blog.get(`/page/:id`, (req, res) => {
  // res.send(articles[req.params.id])
  res.type("html")
  res.sendFile(path.join(__dirname, `./../data/articles/${req.params.id}.html`))
})

module.exports = blog