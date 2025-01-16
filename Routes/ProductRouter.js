const postModel = require("../models/post.model")
const ensureAuthenticated = require("./auth.model")

const router = require("express").Router()


router.get("/post",async (req,res)=>{
    const userPost = await postModel.find()

    // console.log("user data",req.user)
    res.status(200).json(userPost)
})


module.exports = router