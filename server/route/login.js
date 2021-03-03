const express = require("express")
const cookies = require("cookies")

const login = express.Router()

login.get("/", (req, res) => {
  req.cookies.set("userInfo", "hello world!")
})