const mongoose= require('mongoose');

const bookSchema=new mongoose.Schema({
    image:{type:String},
    description:{type:String},
    title:{type:String},
    author:{type:String},
    id:{type:String}
});

// const bookModel=mongoose.model('bookShop',bookSchema);
// // const seedBookCollection=()=>{
// //     const addedBook=new bookModel({
// //         email:this.props.useAuth0.email
// //     })
    
// // }
class Book {
    constructor(data) {
        try{this.image = data.volumeInfo.imageLinks.thumbnail}
        catch{this.image = 'https://www.forewordreviews.com/books/covers/networking-for-people-who-hate-networking.jpg'}
        this.description = data.volumeInfo.description;
        this.title = data.volumeInfo.title;
        this.author=data.volumeInfo.authors;
    }
}


module.exports = {Book,bookSchema};