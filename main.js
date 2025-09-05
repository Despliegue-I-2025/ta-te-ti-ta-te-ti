const express = require('express');
const app = express();
const PORT = 3000;
import {emptyPositions} from "./js/empyPositions.js"

//GET /move?board=[0,1,0,2,0,0,0,0,0]

app.get('/move', (req, res) => {
    let boardParam = req.query.board;
    let board;
    try {
        board = JSON.parse(boardParam);
    } catch (e) {
        return res.status(400).json({ error: 'Parámetro board inválido. Debe ser un array JSON.' });
    }
    if (!Array.isArray(board) || board.length !== 9) {
        return res.status(400).json({ error: 'El tablero debe ser un array de 9 posiciones.' });
    }

    emptyPositions = emptyPositions(board)
    if (emptyPositions.length === 0) {
        return res.status(400).json({ error: 'No hay movimientos disponibles.' });
    }
    



    /* // Elegir una posición vacía al azar
    const move = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    res.json({ movimiento: move }); */
});





//Control de puerto
app.listen(PORT, () => {
    console.log(`Servidor de tateti escuchando en el puerto ${PORT}`);
});
