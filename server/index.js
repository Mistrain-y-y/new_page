const express = require('express')
const home = require("./route/home")
const blog = require("./route/blog")
const about = require("./route/about")
// const login = require("./route/login")
const path = require("path")
const Cookies = require("cookies")

const app = express()

app.use((req, res, next) => {
  req.cookies = new Cookies(req, res)
  next()
})

app.use("/static", express.static(path.join(__dirname, "./../build/static")))// 静态资源访问
app.use("/", express.static(path.join(__dirname, "./../build")))

// 模块化路由
app.use("/", home)
app.use("/blog", blog)
app.use("/about", about)
// app.use("/login", login)

// app.use('/', (req, res, next) => {// 匹配中间件，可以拦截登录和维护公告。
//   next()
// })

// app.use((err, req, res, next) => { // 错误处理中间件
//   res.status(500).send("server error...")
// })

app.listen(3030, () => console.log("3030 server running..."))
