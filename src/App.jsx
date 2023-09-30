import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import FlipCard from './components/FlipCard'
import {nextCard, prevCard, firstCard, totalCards} from './js/cardGenerator'

import './App.css'

function App() {
  const [card, setCard] = useState(firstCard());
  const handleNextBtn = () => { setCard(nextCard()); }
  const handleBackBtn = () => { setCard(prevCard()); }

  return (
    <>
    <div className="header">
      <h1 className='title'>Can you call yourself a Percy Jackson fan?</h1>
      <h2 className='subtitle'>Find out now!</h2>
      <h2 className='subtitle'>Total cards: {totalCards()}</h2>
    </div>

    <FlipCard 
      difficulty={card.difficulty}
      question={card.question}
      ans={card.ans}
      imgSrc={card.img}
      imgAlt={card.imgAlt}/>

    <div className="controlBtnContainer">
      <button className="back controlBtn" onClick={handleBackBtn}>
        <FaArrowLeft />
      </button>
      <button className="next controlBtn" onClick={handleNextBtn}>
        <FaArrowRight />
      </button>
    </div>

    </>
  )
}

export default App
