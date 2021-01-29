const express = require('express')
const home = require("./route/home")
const blog = require("./route/blog")
const about = require("./route/about")
const path = require("path")

const app = express()

app.use("/static", express.static(path.join(__dirname, "./build/static")))// 静态资源访问
app.use("/", express.static(path.join(__dirname, "./build")))

// 模块化路由
app.use("/", home)
app.use("/blog", blog)
app.use("/about", about)

// app.use('/', (req, res, next) => {// 匹配中间件，可以拦截登录和维护公告。
//   next()
// })

// app.use((err, req, res, next) => { // 错误处理中间件
//   res.status(500).send("server error...")
// })

app.listen(3030, () => console.log("server running..."))
