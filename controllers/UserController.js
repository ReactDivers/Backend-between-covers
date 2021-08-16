const {bookModel}=require('../models/UserModel');

const getUser=(req,res)=>{
    const {email}=req.query;
    console.log(email);
    bookModel.find({email:email},(error,user)=>{
        try{
            res.send(user);
        }
        catch(error){
            res.send(error);
        }
    });
}


const createBook=(req,res)=>{
    const email=req.body.email;
    const book=req.body.book;
    bookModel.findOne({email:email},(error,userInfo)=>{
        if (userInfo===null){
            res.send(error);
        }
        else{
            userInfo.booksAdded.push(book);
            userInfo.save();
            res.send(userInfo);
        }
        
    });
}


module.exports={createBook,getUser};