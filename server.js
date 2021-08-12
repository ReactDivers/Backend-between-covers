const express = require('express') 
const app = express();
require('dotenv').config();
const PORT= process.env.PORT;
const cors=require('cors');
 
app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
 });

 app.use(cors());
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
});