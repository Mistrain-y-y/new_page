import React, { lazy, Suspense } from 'react'
import "./static/css/common.css"
import {Route} from 'react-router-dom'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Foot from './components/Foot'

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Compose = lazy(() => import("./pages/Compose"))
const Blog = lazy(() => import("./pages/Blog"))

const App = () => {
  return (
    <>
      <Nav/>
      <div className="body-padding">
      <Suspense fallback={<Loading/>}>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/compose" component={Compose}/>
        <Route path="/about" component={About}/>
      </Suspense>
      </div>
      <Foot/>
    </>
  )
}

export default App