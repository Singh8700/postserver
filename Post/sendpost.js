const postModel = require("../models/post.model");

const route = require("express").Router()

route.post("/post/:id", async (req,res)=>{
    // console.log("params is :",req.params.id)
    try{
        const results = await postModel.findOne({_id:req.params.id})
        // console.log("your result",results)
        if(results){
            res.status(200).json({
                msg:"Post is there",
                success:true,
                results
            })
        }else{
            res.status(404).json({
                msg:"Something want wrong",
                success:false
            })
        }
    }catch (e){
        res.status(404).json({
            msg:"Something want wrong",
            success:false
        })
    }
})

module.exports = route