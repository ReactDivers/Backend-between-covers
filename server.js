const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());

const client = jwksClient({
    jwksUri: process.env.JWKSURI,

  });
  
const { getBook,creatReview, fiction, nonFiction, kids, classic, getQuote } = require('./controllers/BookController');
const {createBook,getUser,deleteBook}=require('./controllers/UserController');
const {seedBookCollection}=require('./models/UserModel');
// seedBookCollection();
app.get('/',
    function (req, res) {
        res.send('Hello World')
    });

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_URL}/bookShop`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

 getKey=(header, callback)=>{
    client.getSigningKey(header.kid, (err, key)=> {
     const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  app.get('/verifyToken',(req,res)=>{
      const token=req.headers.authorization.split(' ')[1]
      jwt.verify(token, getKey, {}, (err, user)=> {
          if(err){
              res.send('INVALID TOKEN');
          }
          res.json(user)
      });
})


app.get('/book', getBook);////search bar 

app.get('/user',getUser);
app.post('/book',createBook);
app.delete('/book/:book_id',deleteBook)
app.get('/book1', fiction);
app.get('/book2', nonFiction);
app.get('/book3', classic);
app.get('/book4', kids);
app.get('/quote', getQuote);
app.post('/review', creatReview);//////creat review
app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
});