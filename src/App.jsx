import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import FlipCard from './components/FlipCard'
import {nextCard, prevCard, firstCard, totalCards} from './js/cardGenerator'

import './App.css'

function App() {
  const [card, setCard] = useState(firstCard());
  const [isFront, setCardFront] = useState('true');
  
  const flipCard = () => {
      setCardFront(!isFront);
  }

  const handleNextBtn = () => { 
    setCard(nextCard());
    if (!isFront) flipCard();
  }
  const handleBackBtn = () => { 
    setCard(prevCard()); 
    if (!isFront) flipCard();
  }

  return (
    <>
    <div className="header">
      <h1 className='title'>Science Review</h1>
      <h2 className='subtitle'>Total cards: {totalCards()}</h2>
    </div>

    <FlipCard 
      difficulty={card.difficulty}
      question={card.question}
      ans={card.ans}
      imgSrc={card.img}
      imgAlt={card.imgAlt}
      cardFlipedHandler={flipCard}
      cardFront={isFront}/>

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
