import React from 'react'

import { TextField } from '@material-ui/core'

import Button from '../Button'

const Form = ({ returnGuessToApp }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value
        returnGuessToApp(guess)
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField style={{ paddingBottom: '20px', marginTop: '20px'}} fullWidth type="number" name="guess" label="Colocá tu número..." required />
            <Button type="submit" title="¿ADIVINÉ?" />
        </form>
    )
}

export default Form