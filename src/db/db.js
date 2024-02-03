import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// database connection code here 
const connectDB = async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
        console.log(`\n MonogDB Connected !! DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MonogDB Connection Error",error);
        process.exit(1)
    }
}

// exporting 
export default connectDB