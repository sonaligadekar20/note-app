import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { deleteApiNote, getApiNote, getApiNoteById, postApiNote, putApiNote } from './controllers/note.js';
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

app.get('/api/notes', getApiNote);

app.get('/api/note/:id', getApiNoteById);

app.put('/api/note/:id', putApiNote);

app.delete('/api/note/:id', deleteApiNote)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})
