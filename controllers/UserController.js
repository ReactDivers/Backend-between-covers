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
    console.log(email);
    // console.log(book);
    bookModel.findOne({ email: email }, (error, userInfo) => {
        console.log(userInfo);
        console.log("userInfo");
        console.log(req.body);
        if (error) {
            res.send(error.message)
        } else {
            if (userInfo === null) {
                // res.send(error);
                const newUser = new bookModel({
                    email: email,
                    booksAdded: [
                        book
                    ]
                });

                newUser.save();
                res.send(newUser);
            }
            else {
                userInfo.booksAdded.push(book);
                userInfo.save();
                res.json(userInfo);
            }
        }

    });
}

const deleteBook = async (req, res) => {
    // res.send(`HELLO:${req.params.book_id}`);

    // get the params values from the request
    const bookId = req.params.book_id;
    const email = req.query.email;

    // res.send({bookId : bookId , email:email})
    await bookModel.findOne({ email }, (err, user) => {
        const newBookArray = user.booksAdded.filter(book => book.id !== bookId);
        user.booksAdded = newBookArray;
        user.save();
        res.status(200).send('success');

        // bookModel.deleteOne({ _id: bookId }, (error, deleted) => {
        //     res.send(deleted);
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


module.exports = { createBook, getUser, creatReview, deleteBook };
