const express = require("express")

const blog = express.Router()

blog.get("/", (req, res) => {
  res.send("blog")
})

blog.get('/detail', (req, res) => {
  console.log("hello")
  res.send('hello mistrain!')
})

module.exports = blog