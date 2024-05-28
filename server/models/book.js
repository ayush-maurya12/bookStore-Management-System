import mongoose from "mongoose" 

const bookSchema=new mongoose.Schema({
    name:{
        type:String
    },
    author:
    {
        type:String,
        required:true,
        unique:true
    },
    imageurl:{
        type:String,
        required:true
    },
})

const bookModel=mongoose.model('Book',bookSchema)
export{bookModel as Book}