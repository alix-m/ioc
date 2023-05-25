const express = require('express')
var cors = require('cors')
const db = require('./db.json')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/data', (req, res) => {
    res.send(db.personData)
})

app.post('/login', (req, res) => {
  let id = req.body.id
  let user = db.userData.filter(user => user.id === id)
  if(user.length !== 0) res.send(user)
})

app.post('/updateSettings', (req, res) => {
  let id = req.body.id
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})