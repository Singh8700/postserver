
const LogOut = (req,res,next) =>{
    res.cookie("user","");
    next()
}

module.exports = LogOut