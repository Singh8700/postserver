const postModel = require("../models/post.model")
const Likes = async(req,res,next)=>{
    // console.log(req.body)
    const {user,id} = req.body
    // console.log(id,user)
    const postFind = await postModel.findOne({_id:id}).populate("user")
    // console.log(postFind)
    if(!user){
        res.status(404).json({
            msg:"something want wrong",
            success:false
        })
    }else if(postFind.likes.indexOf(user) === -1){
        // console.log("user is is here", user)
        await postFind.likes.push(user)
    }else{
        const existLikes = postFind.likes.indexOf(user)
        await postFind.likes.splice(existLikes, 1)
    }
    await postFind.save()
    // console.log(postFind)
}

module.exports = Likes