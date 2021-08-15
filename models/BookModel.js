const mongoose= require('mongoose');

const bookSchema=new mongoose.Schema({
    image:{type:String},
    author:{type:String},
});

// const bookModel=mongoose.model('bookShop',bookSchema);
// const seedBookCollection=()=>{
    
// }
class Book {
    constructor(data) {
        try{this.image = data.volumeInfo.imageLinks.thumbnail}
        catch{this.image = 'https://www.forewordreviews.com/books/covers/networking-for-people-who-hate-networking.jpg'}

      
        
        this.description = data.volumeInfo.description;
        this.title = data.volumeInfo.title;
        this.author=data.volumeInfo.authors;
    }
}


module.exports = Book;