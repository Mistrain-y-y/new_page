const express = require("express")
const path = require("path")

const home = express.Router()

home.get("/", (req, res) => {// 呈现首页
  res.sendFile(path.join(__dirname, "../../build/index.html"))
})

module.exports = home