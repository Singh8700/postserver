const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Signup = async (req,res)=>{
    try{
    const {userName,fullName,email,password} = req.body
   
        const hashPassword = await bcrypt.hash(password,10)

        const userData = await userModel.create({
            userName,
            fullName,
            email,
            password:hashPassword
        })
        res.status(200).json({
            msg:"Successfully Register",
            success:true
        })
        // console.log(hashPassword,token)

    }catch (e){
        res.status(500).json({
            msg:"Internal server error",
            success:false
         })
    }
}

module.exports = Signup