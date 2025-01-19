const express = require("express")
// create app
const app = express()

// dotenv file config
const dotenv = require("dotenv")
const { urlencoded } = require("body-parser")
dotenv.config()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

// body-parser init client se data get karne ke liye
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// cors require to send data to client site request ko allow karne ke liye
const cors = require("cors")
app.use(cors())

// cookies parser init
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// DATABASE CONNECT
const DB = require("./config/db.config")
DB()

const authanticate = require("./authanticate/authanticate.protect")
app.use("/auth",authanticate)


// Rutes api create 
const AuthRouter = require("./Routes/ProductRouter")
app.use("/api",AuthRouter)

// send data 
const PostData = require("./Post/sendpost")
app.use("/auth",PostData)
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})