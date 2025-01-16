const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

const createPost = async(req,res,next)=>{

    const existUser = await userModel.findOne({_id:req.body.id})
    
    if(existUser){
        // console.log(existUser)
        try{
            const {id,title,post} = req.body
            // console.log(id,title,post)
        const createNewPost = await postModel.create({
        user: existUser._id,
        title,
        post,
        userName : existUser.userName
    })
    // console.log(createNewPost)
    await existUser.posts.push(createNewPost._id)
    await existUser.save()
    await res.status(200).json({
        msg:"Successfully New Post Created",
        success:true,
        id:createNewPost._id,
        title:createNewPost.title,
        post:createNewPost.post
    })
        }catch (e){
            res.status(404).json({
                msg:"Something want wrong",
                success:false
            })
        }
    }
    next()
}
module.exports = createPost