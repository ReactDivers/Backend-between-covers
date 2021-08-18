const { bookModel } = require('../models/UserModel');

const getUser = (req, res) => {
    const { email } = req.query;
    console.log(email);
    bookModel.find({ email: email }, (error, user) => {
        try {
            res.send(user);
        }
        catch (error) {
            res.send(error);
        }
    });
}


const createBook = (req, res) => {
    const email = req.body.email;
    const book = req.body.book;
    console.log(req.body);
    bookModel.findOne({ email: email }, (error, userInfo) => {
        if (userInfo === null) {
            res.send(error);
        }
        else {
            userInfo.booksAdded.push(book);
            userInfo.save();
            res.send(userInfo);
        }

    });
}

const creatReview = async (req, res) => {

    // res.send('we are writing a review here .... ✍️')
    console.log("=======");
    console.log(req.body);
    const {
        email,
        description,
        title,

    } = req.body;

    // create the new book reveiew
    const newBookObj = new bookModel({
        email: email,
        description,
        title,
    });
    newBookObj.save();

    res.json(newBookObj);
}


module.exports = { createBook, getUser, creatReview };