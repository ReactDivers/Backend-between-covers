const Book=require('../models/BookModel');
require('dotenv').config();
const BOOK_SEARCH_URL= process.env.BOOK_SEARCH_URL;
const axios = require('axios');


const getBook=async(req,res)=>{
const searchQuery=req.query.q;
console.log(searchQuery);
const url=`${BOOK_SEARCH_URL}q=${searchQuery}`;
const bookResponse=await axios.get(url);
const bookData=bookResponse.data.items.map(item=>new Book(item));
// console.log(bookData);
res.json(bookData);
}






module.exports=getBook