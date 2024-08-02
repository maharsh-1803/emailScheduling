const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
    },
    text:{
        type:String,
        required:true
    },
    schedule:{
        type:String,
        required:true
    }
},{timestamps:true})

const Email = new mongoose.model('Email',mailSchema);
module.exports=Email