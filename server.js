const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());

const { getBook, fiction, nonFiction, kids, classic,getQuote } = require('./controllers/BookController')

app.get('/',
    function (req, res) {
        res.send('Hello World')
    });


app.get('/book', getBook);////search bar 
app.get('/book1', fiction)
app.get('/book2', nonFiction)
app.get('/book3', classic)
app.get('/book4', kids)
app.get('/quote', getQuote)
app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
});