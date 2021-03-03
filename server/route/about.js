const express = require("express")
const path = require("path")


const about = express.Router()

about.get("/", (req, res) => {// 呈现首页
  res.sendFile(path.join(__dirname, "../../build/index.html"))
})

module.exports = about