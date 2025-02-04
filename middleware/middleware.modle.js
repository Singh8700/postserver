const Joi = require("joi")


const SignupValidation = (req,res,next)=>{
    const schema = Joi.object({
        userName : Joi.string().min(3).max(20).required(),
        fullName:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().min(10).required(),
        password:Joi.string().min(6).required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            msg:"Bad request",
            error
        })
    }
    next()
}

// login validation
const LoginValidation = (req,res,next)=>{
    const schema = Joi.object({
        email:Joi.string().email().min(10).required(),
        password:Joi.string().min(6).required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            msg:"Bad request",
            error
        })
    }
    next()
}

module.exports = {SignupValidation, LoginValidation}