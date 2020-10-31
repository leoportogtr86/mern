const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./db/config/db')


app.use(cors())






app.get('/', (req, res) => {

    res.send({ msg: 'Api no ar...' })


})


app.listen(3001, () => {

    console.log('servidor rodando na porta 3001')
})