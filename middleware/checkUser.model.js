const userModel = require("../models/user.model")

const UserCheck = async(req,res,next)=>{
    const {userName,email} = req.body
    const user = await userModel.findOne({userName})
    if(user){
        return res.status(409).json({
            msg:"This user name is already exixts, please use another user name",
            success:false
        })
    }

    const userEmail = await userModel.findOne({email})
    if(userEmail){
      return  res.status(409).json({
            msg:"This email is already exist, you can login",
            success:false
        })
    }
    next()
}

module.exports = UserCheck