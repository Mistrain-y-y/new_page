import React, { lazy, Suspense } from 'react'
import {Route} from 'react-router-dom'
import Loading from './components/Loading'
// import Home from './components/Home'

const Home = lazy(() => import("./components/Home"))

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Route path="/" component={Home}/>
      </Suspense>
    </>
  )
}

export default App