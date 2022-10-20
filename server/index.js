const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
mongoose.connect(
  'mongodb+srv://mern:mern1234@cluster0.ayx6x.mongodb.net/mern?retryWrites=true&w=majority'
)
app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.get('/', (req, res) => {
  res.send('<h1>서비스 준비중입니다...</h1>')
})

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(3001, () => {
  console.log('SERVER RUNS PERFECTLY!')
})
