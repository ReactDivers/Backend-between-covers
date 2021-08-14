const Book = require('../models/BookModel');
const Quote = require('../models/QuoteModel')
const Book2 = require('../models/Book2Model')

require('dotenv').config();
const BOOK_SEARCH_URL = process.env.BOOK_SEARCH_URL;
const axios = require('axios');



const getBook = async (req, res) => {
    const searchQuery = req.query.q;
    console.log(searchQuery);
    const url = `${BOOK_SEARCH_URL}q=${searchQuery}`;
    const bookResponse = await axios.get(url);
    const bookData = bookResponse.data.items.map(item => new Book(item));
    // console.log(bookData);
    res.json(bookData);
}

const fiction = async (req, res) => {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5t8poToL9lH90HZvSpRZFGcRP1CwuJtL'
    const fictions = await axios.get(url)

    const bookData = fictions.data.results.books.map(item => new Book2(item));
    res.json(bookData);
}

const nonFiction = async (req, res) => {

    const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=5t8poToL9lH90HZvSpRZFGcRP1CwuJtL'
    const nonFiction = await axios.get(url2)

    const bookData = nonFiction.data.results.books.map(item => new Book2(item));
    res.json(bookData);
}

const classic = async (req, res) => {

    const url3 = 'https://www.googleapis.com/books/v1/volumes?q=subject:classic'
    const bookResponse = await axios.get(url3)
    // .then((result) => {
    //     res.json(result.data)

    // })
    const bookData = bookResponse.data.items.map(item => new Book(item));
    res.json(bookData);
}

const kids = async (req, res) => {

    const url4 = 'https://www.googleapis.com/books/v1/volumes?q=subject:kids'
    const bookResponse = await axios.get(url4)
    // .then((result) => {
    //     res.json(result.data.items)

    // })
    const bookData = bookResponse.data.items.map(item => new Book(item));
    res.json(bookData);
}

const getQuote = async (req, res) => {
    const url = 'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes'

    const quote = await axios.get(url)
    const quoteData = quote.data.quotes.map(item => new Quote(item));
    // console.log(bookData);
    res.json(quoteData);

}

module.exports = { getBook, fiction, nonFiction, kids, classic, getQuote }