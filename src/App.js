import React, { useState } from 'react';

import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';

import Form from "./components/Form"
import Progress from "./components/Progress"
import Info from "./components/Info"
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
          <Divider className="paper-card__divider" />
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
            style={{ marginBottom: "15px", marginTop: "20px" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={resetGame}
          >
            Reset Game
          </Button>
          <Info show={show}></Info>
        </Paper>
      </Grid>
    </Grid>
    </StylesProvider>
  )
}

export default App