import React, { useState } from 'react';

import { Grid, Typography, Paper } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';

import Form from "./components/Form/index.js"
import Progress from "./components/Progress/index.js"
import Info from "./components/Info/index.js"
import Button from "./components/Button/index.js"
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
    <StylesProvider injectFirst>
    <Grid
    container
    justify="center"
    alignItems="center"
    className="grid-container"
    >
      <Grid item xs={10} lg={3} justify="center" alignItems="center">
        <Paper 
          className="paper-card">
          <Typography align="center" variant="h3" gutterBottom>
            HOT or COLD
          </Typography>
          <hr className="paper-card__divider" />
          <div className={`feedback ${feedbackCode}`}>
            <h2 className="feedback-text">{feedbackMessage}</h2>
          </div>
          <Form
            // block={block}
            returnGuessToApp={value => updateState(value)}
          />
          <Progress
            feedbackMessage={feedbackMessage}
            attempt={attempt}
            guessList={guessList}
          ></Progress>
          <Button
            onClick={resetGame}
            title="Reset Game"
          />
          <Info show={show}></Info>
        </Paper>
      </Grid>
    </Grid>
    </StylesProvider>
  )
}

export default App