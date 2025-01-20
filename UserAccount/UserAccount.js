const postModel = require("../models/post.model")

const route = require("express").Router()

route.post("/account/:id",async(req,res)=>{
    // console.log(req.params.id)
    if(!req.params.id){
        res.status(404).json({
            msg:"Account Not Found",
            success:false
        })
    }
    try{
        const userData = await postModel.find({user:req.params.id})
    // console.log(userData)
    if(userData){
        res.status(200).json({
            msg:`Hi ${userData.userName}`,
            success: true,
            userData
        })
    }
    }catch (e){
        res.status(404).json({
            msg:"Account Not Found",
            success:false
        })
    }
})

module.exports = route