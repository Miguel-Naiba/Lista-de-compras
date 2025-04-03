const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let cesta = [];

// Rota para obter os itens da cesta
app.get('/cesta', (req, res) => {
    res.json(cesta);
});

// Rota para adicionar um item à cesta
app.post('/cesta', (req, res) => {
    const item = req.body;
    cesta.push(item);
    res.status(201).json({ message: 'Item adicionado à cesta!' });
});

// Rota para limpar a cesta
app.delete('/cesta', (req, res) => {
    cesta = [];
    res.json({ message: 'Cesta limpa!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
