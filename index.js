const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Probando deploy openode')
})

const server = app.listen(3000, () => {

});