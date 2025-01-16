const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Login = async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await userModel.findOne({email})
        // res.json(user)
        if(!user){
            return res.status(403).json({
                msg:"Auth failed email or password is wrong",
                success:false,
            })
        }
        
        const isPassword = bcrypt.compare(password,user.password,(error,result)=>{
            if(error){
            return res.status(403).json({
                msg:"Auth failed email or password is wrong",
                success:false,
            })
        }else if(result){
            console.log(error)
            const token = jwt.sign(
                {user},process.env.JWT_SECRET,
                {expiresIn: '24h'}
            )
            res.cookie("user",token)
            // pass the data for client side 
            res.status(200).json({
                id:user._id,
                msg:"Login Successfully",
                success:true,
                token,
                email,
                name:user.fullName
             })
        
        }else{
            return res.status(403).json({
                msg:"Auth failed email or password is wrong",
                success:false,
            })
        }
    })
        //  console.log(req.cookies())
        // res.json(user)
    }catch (e){
        res.status(500).json({
            msg:"Internal server error",
            success:false
         })
    }
}

module.exports = Login