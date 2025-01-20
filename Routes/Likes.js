const postModel = require("../models/post.model")
const Likes = async(req,res)=>{
    // console.log(req.body)
    const {user,id} = req.body
    // console.log(id,user)
    const postFind = await postModel.findOne({_id:id}).populate("user")
    // console.log(postFind)
    if(postFind.likes.indexOf(user) === -1){
        await postFind.likes.push(user)
    }else{
        const existLikes = postFind.likes.indexOf(user)
        await postFind.likes.splice(existLikes, 1)
    }

    await postFind.save()
    // console.log(postFind)
    res.redirect("/api/post")
}

module.exports = Likes