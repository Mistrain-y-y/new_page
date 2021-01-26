import React from 'react'
import './style.css'
import { Carousel } from 'antd'

const Slider = () => {
  return (
    <Carousel autoplay>
    <div className="slider-single-box">
      hello world!
    </div>
    <div className="slider-single-box">
      hello react!
    </div>
    <div className="slider-single-box">
      hello mistrain!
    </div>
    <div className="slider-single-box">
      have a nice day!
    </div>
  </Carousel>
  )
}

export default Slider