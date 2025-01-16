const router = require("express").Router()
const {SignupValidation, LoginValidation } = require("../middleware/middleware.modle")
const UserCheck = require("../middleware/checkUser.model")
const Signup = require("./singup.auth")
const Login = require("./login.auth")
const ensureAuthenticated = require("../Routes/auth.model")
const Logout = require("./logout.model")
const createPost = require("../Post/Post.model")

router.post("/signup",UserCheck,SignupValidation,Signup)


router.post("/login",Login)


router.get("/logout",Logout)

router.post("/create_post",createPost)

module.exports = router