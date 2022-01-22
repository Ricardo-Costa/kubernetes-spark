const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Hello World!!'
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log('App start at port 3000')
})