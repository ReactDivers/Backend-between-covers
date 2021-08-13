class Book{
    constructor(data){
        this.image=data.volumeInfo["imageLinks"];
        this.description=data.volumeInfo.description;
        this.title=data.volumeInfo.title;
        

    }
}


module.exports=Book;