const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const { getBook, fiction, nonFiction, kids, classic, getQuote, creatReview } = require('./controllers/BookController');
const { createBook, getUser } = require('./controllers/UserController');
const { seedBookCollection } = require('./models/UserModel');
// seedBookCollection();
app.get('/',
    function (req, res) {
        res.send('Hello World')
    });

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_URL}/bookShop`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

app.get('/book', getBook);////search bar 
app.get('/user', getUser);
app.post('/book', createBook)
app.get('/book1', fiction);
app.get('/book2', nonFiction);
app.get('/book3', classic);
app.get('/book4', kids);
app.get('/quote', getQuote);
app.post('/review', creatReview);//////creat review
app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
});