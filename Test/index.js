console.log('Hello woorld');
const express = require('express')
const app = express()
const port = 3000
const express = require("express");
const helmet = require("helmet");
 
const app = express();
 
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/soap', function (req, res) {
  res.send('Number 1!')
})
app.get('/rest', function (req, res) {
  res.send('Number 2!')
})