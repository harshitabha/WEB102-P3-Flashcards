import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import FlipCard from './components/FlipCard'
import {nextCard, prevCard, firstCard, totalCards} from './js/cardGenerator'

import './App.css'

function App() {
  const [card, setCard] = useState(firstCard());
  const [isFront, setCardFront] = useState('true');
  const [guess, setGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [resultVal, setResultVal] = useState('');
  
  const flipCard = () => {
    setCardFront(!isFront);
    setShowResult(false);
    setGuess('');
  }

  const handleNextBtn = () => { 
    setCard(nextCard());
    if (!isFront) flipCard();
  }
  const handleBackBtn = () => { 
    setCard(prevCard()); 
    if (!isFront) flipCard();
  }

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  }

  const checkAns = (e) => {
    e.preventDefault();
    if(isFront) {
      setResultVal(guess.toLowerCase() === card.ans.toLowerCase() ? 'Correct!' : "Incorrect :(");
      setShowResult(true);
    }
  };

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
        <button className="back controlBtn button" onClick={handleBackBtn}>
          <FaArrowLeft />
        </button>
        <button className="next controlBtn button" onClick={handleNextBtn}>
          <FaArrowRight />
        </button>
      </div>

      <div className="ansContainer">
        <label htmlFor="guessAns" className="inputLabel">Answer:</label>
        <input 
          type="text" 
          id="guessAns" 
          default="Answer here"
          value={guess}
          onChange={handleGuessChange} />
        <button onClick={checkAns} type='submit' className="submit button">Submit</button>
      </div>
      <p className={`resultContainer ${showResult ? '' : 'hide'}`}>{resultVal}</p>

    </>
  )
}

export default App
