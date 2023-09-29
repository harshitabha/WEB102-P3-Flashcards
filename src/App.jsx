import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import FlipCard from './components/FlipCard'
import getRandomCard from './js/cardGenerator'

import './App.css'

function App() {
  const [data, setData] = useState(getRandomCard());
  console.log(data);

  return (
    <>
    <div className="header">
      <h1>Can you call yourself a Percy Jackson fan?</h1>
      <h2>Find out now!</h2>
    </div>

    <FlipCard 
      difficulty={data.difficulty}
      question={data.question}
      ans={data.ans}
      imgSrc={data.img}
      imgAlt={data.imgAlt}/>

    <div className="controlBtnContainer">
      <button className="back controlBtn">
        <FaArrowLeft />
      </button>
      <button className="next controlBtn">
        <FaArrowRight />
      </button>
    </div>

    </>
  )
}

export default App
