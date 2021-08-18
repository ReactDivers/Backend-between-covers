const mongoose = require('mongoose');
const { bookSchema } = require('./BookModel');

const userSchema = new mongoose.Schema({
    email: { type: String },
    booksAdded: [bookSchema]
});

const bookModel = mongoose.model('bookShelf', userSchema);

const seedBookCollection = (email) => {
    const newUser = new bookModel({
        email: email,
        booksAdded: []
    });

    newUser.save();
}

module.exports = { bookModel, seedBookCollection }