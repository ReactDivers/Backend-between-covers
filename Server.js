'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
app.use(cors());

app.get('/', (request, response) => {
    response.send('Hello World 🥳');
  });
  
const app = express();

app.listen(PORT, () => {
    console.log(`im listening on PORT = ${PORT}`);
  });