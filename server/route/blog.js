const express = require("express")
const path = require("path")

const blog = express.Router()

blog.get("/", (req, res) => {// 呈现首页
  res.sendFile(path.join(__dirname, "./../build/index.html"))
})

blog.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, "./../build/index.html"))
})

module.exports = blog