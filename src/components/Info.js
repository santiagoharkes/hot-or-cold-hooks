import React, { useState } from "react";

import { Button, DialogTitle, Dialog, DialogContent } from "@material-ui/core";

function Info() {
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
    }

    return (
        <React.Fragment>
            <Dialog open={state} onClose={handleToggle}>
                <DialogTitle>Reglas del juego:</DialogTitle>
                <DialogContent>
                    Este es un juego en donde tenés que adivinar el número:
                    <ol>
                    <li>
                        La súper Robotina va a elegir un número entre el 1 y el 100 y lo mantiene en secreto.
                    </li>
                    <li>
                        Vos tenés que intentar adivinar el número que eligió Robotina!
                    </li>
                    <li>
                        Como Robotina es la mejor, te va a tirar pistas de qué tan lejos o cerca estés de acertar. Mientras más lejos, más frío. Mientras más cerca, más caliente.
                    </li>
                    </ol>
                    ¿Estás listo?
                </DialogContent>
                <Button style={{padding: "20px"}} onClick={handleToggle}>¡Quiero jugar YA!</Button>
            </Dialog>
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleToggle}
            >
            ¿Cómo se juega?
            </Button>
        </React.Fragment>
    )
}

export default Info