const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

const DeletePost = async (req,res)=>{
    // console.log("post is ",req.params)
    const findUser = await postModel.findOne({_id:req.params.id}) 

    // console.log("post data",findUser)

    const userDataUpadte = await userModel.findOne({_id:findUser.user})

    // console.log("userdata",userDataUpadte)

    const existLikes = userDataUpadte.posts.indexOf()
     await userDataUpadte.posts.splice(existLikes, 1)

    await postModel.findOneAndDelete({_id:req.params.id})
   
    await userDataUpadte.save()
}
module.exports = DeletePost