const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>PFA Docker</h1>')
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})