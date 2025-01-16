const mongoose = require("mongoose")

const DB = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connect Successfully")
    }).catch((error)=>{
        console.log("db Error is : ", error)
    })
}

module.exports = DB