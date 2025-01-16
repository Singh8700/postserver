const mongoose = require("mongoose")

const userPost = mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        data:{
            type: Date,
            default: Date.now
        },
        userName:{
            type:String,
            lowercase:true,
            required:true,
            trime:true,
            minlength: [3, 'title Must Be at least 3 characters long']
        },
        title:{
            type:String,
            lowercase:true,
            required:true,
            trime:true,
            minlength: [3, 'title Must Be at least 3 characters long']
        },
        post:{
            type:String,
            required:true,
            trim:true,
            lowecase:true
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }]
    })

const postModel = mongoose.model("posts",userPost)

module.exports = postModel