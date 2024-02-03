import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"



const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


// limiting the json data size to not crash an app
app.use(express.json({
    limit:"16kb"
}))

// configration to get data from url
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// store the static file in public
app.use(express.static("public"))



export {app}