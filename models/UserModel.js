const mongoose=require('mongoose');
const {bookSchema}=require('./BookModel');

const userSchema=new mongoose.Schema({
    email:{type:String},
    booksAdded:[bookSchema]
});

const bookModel=mongoose.model('bookShelf',userSchema);

const seedBookCollection=()=>{
    const newUser=new bookModel({
        email:"rawanazazi12@gmail.com",
        booksAdded:[
            {
                description:"nice  book",
                title:"The invisible guest",
                image:"#",
                author:"John",
                id:"65655"

            }
        ]
    });

    newUser.save();
}

module.exports={bookModel,seedBookCollection}