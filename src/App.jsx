/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'

function App() {
  

  return (
    <div className='app'>
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* Color code generator component */}
      {/* <RandomColor /> */}

      {/* Star Rating component  */}
      {/* <StarRating noOFStars={10} /> */}

      {/* Image Slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={'1'}/> */}


      {/* Load more products component */}

      <LoadMoreData />
    </div>
  )
}

export default App
