import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { postApiNote } from './controllers/note.js';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async ()=>{
  const conn = await mongoose.connect(process.env.MONGODB_URI)

  if(conn){
    console.log("MongoDB connected")
  }
}
connectDB();

app.post('/api/note', postApiNote );

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})
