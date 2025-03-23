const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Homepage!')
})

app.get('/morning/', (req, res) => {
    res.send('Goodmorning!')
  })

  app.get('/Afternoon/', (req, res) => {
    res.send('Goodafternoon!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
