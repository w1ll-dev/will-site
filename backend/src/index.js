const en = require('./data/en.json')
const pt = require('./data/pt.json')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/en', (req, res) => res.send(en))
app.get('/pt', (req, res) => res.send(pt))

app.use(cors(), (error, req, res, next) => {
  try {
      res.status(error.status || 500);
      res.json({error: error.message})
  } catch (error) {}
})

module.exports = app