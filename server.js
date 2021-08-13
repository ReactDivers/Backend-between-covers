const express = require('express') 
const app = express();
require('dotenv').config();
const PORT= process.env.PORT;
const cors=require('cors');
app.use(cors());

const getBook=require('./controllers/BookController')

app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
 });


 app.get('/book',getBook);
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
});