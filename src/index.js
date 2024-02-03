import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})




connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    })
})
.catch((err)=>{
    console.log("MONGODB FAILED TO CONNECT", err);
})















//first method s

// (async ()=> {
//     try {
//        await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR");
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listing on ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// })()
