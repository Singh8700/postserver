
const jwt = require("jsonwebtoken")

const ensureAuthenticated = (req,res, next)=>{
    const auth = req.headers["authorization"]
    // console.log(auth)
    if(!auth){
        return res.status(403).json({
            msg:"Unauthorized account, Please login now",
            success:false
        })
    }
    try{
        const decodedToken = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decodedToken
        next()
    }catch (e){
        return res.status(403).json({
            msg:"Unauthorized account, Please login now",
            success:false
        })
    }
}

module.exports = ensureAuthenticated