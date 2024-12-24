import express from 'express'
import connectDB from './database/db.js';
import dotenv from 'dotenv';
const app = express();
const PORT = 3000;

dotenv.config();

app.get('/hello',(req,res)=>{
    res.send('website new')
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
    connectDB();
})
