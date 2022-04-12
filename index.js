const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./db/conn")
const cors = require("cors")
app.use(bodyParser.json())
const parkings = require('./routes/parkings')
const login = require('./routes/login')
app.use('/api', parkings)
app.use('/api/login', login)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})