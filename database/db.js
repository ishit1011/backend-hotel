import mongoose from "mongoose";

// function to connect database [async]
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database is connected');
    }catch(err){
        console.log(err);
    }
}

export default connectDB