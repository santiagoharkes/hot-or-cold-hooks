import React, { useState } from 'react';
import Form from './components/Form'
import Progress from './components/Progress'
import Info from './components/Info'

import { getInitialState, getFeedback } from "./utils"

import './App.css'

function App() {
  const [estado, setEstado] = useState(getInitialState())

  console.log(estado)

  const resetGame = () => {
    setEstado(getInitialState())
  }

  const updateState = (guess) => {

    const difBtw = Math.abs(guess - estado.actual)

    const { feedbackMessage, feedbackColor, feedbackCode } = getFeedback(difBtw, estado.attempt)

    setEstado({...estado,
      guess,
      allGuess: [...estado.allGuess, { guess, feedbackColor }],
      attempt: estado.attempt + 1,
      feedbackMessage,
      feedbackCode,
    })
  }

  const { allGuess, attempt, feedbackMessage, show, feedbackCode } = estado;

  const guessList = allGuess.map((item, index) => (
    <li key={index}>
      <span>{item.guess}</span>
    </li>
  ))

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">Hot or Cold</h1>
        <div className={`card-feedback ${feedbackCode}`}>
          <h3 className="card-feedback__text">{feedbackMessage}</h3>
        </div>
        <Form returnGuessToApp={value => updateState(value)} />
        <Progress
            feedbackMessage={feedbackMessage}
            attempt={attempt}
            guessList={guessList}
          ></Progress>
        <button onClick={resetGame}>Reset Game</button>
        <Info show={show} />
      </div>
    </div>
    )
}

export default App