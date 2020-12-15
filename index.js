const express = require('express');

const app = express(); 

app.get('/', async (req, res) => {
  res.send('Hello World Flex')
});

module.exports = app;