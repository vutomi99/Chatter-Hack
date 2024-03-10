import mongoose from "mongoose";

const connectToMongoDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI,);
        console.log("Connected");
        
    } catch (error) {
        console.log("error connecting to the DB",error.message)
    }
}

export default  connectToMongoDB;