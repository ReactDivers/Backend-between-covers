const mongoose= require('mongoose');

const bookSchema=new mongoose.Schema({
    image:{type:String},
    author:{type:String},
});

const bookModel=mongoose.model('bookShop',bookSchema);
const seedBookCollection=()=>{
    
}
class Book {
    constructor(data) {
        this.image = data.volumeInfo["imageLinks"];
        this.description = data.volumeInfo.description;
        this.title = data.volumeInfo.title;
        this.author=data.volumeInfo.authors;
    }
}


module.exports = Book;