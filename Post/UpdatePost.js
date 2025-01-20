const postModel = require("../models/post.model")

const postUpdate = async(req,res,next)=>{
    const {id,title,post} = req.body

    if(!title || !post){
        res.status(400).json({
            msg:"Something want wrong",
            success:false
        })
    }
    const oldData = await postModel.findOneAndUpdate({_id:id},
    {
        title,
        post
    })
    res.status(200).json({
        msg:"Update Successfully",
        success:true,
        user:oldData.user
    })
}

module.exports = postUpdate