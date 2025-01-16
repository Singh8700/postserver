const mongoose = require("mongoose")

const userSign = new mongoose.Schema({
        userName:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
            minlength: [3, 'Username Must Be at least 3 characters long']
        },
        fullName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minlength: [3, 'Username Must Be at least 3 characters long']
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
            minlength:[10]
        },
        password:{
            type:String,
            required:true,
            minlength:[6,"Please enter the minimum 6 later"]
        },
        posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"posts"
        }]
    })


const userModel = mongoose.model("users",userSign)

module.exports = userModel