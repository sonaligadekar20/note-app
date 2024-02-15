import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
const App =()=>{
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const addNote = async () => {
    const storeUser = JSON.parse(localStorage.getItem('user'))

    const response = await axios.post('/api/note', {
      user: storeUser?._id,
      title: title,
      description: description,
      priority: priority
    })
    alert(response?.data?.message);
  }

  const loadTasks = async ()=>{
    const response = await axios.get("/api/notes");

    setNotes(response?.data?.data)
  }

  useEffect(()=>{
    loadTasks();
  },[])

  return (
   <>
    <div className='main-container  '>
    <h1 className='text-center '>NoteWave</h1>
    <div className='container'>
    <div className='addnote-container mt-5'>
      <form>
      <h2 className='text-center'> Add Note</h2>
      <div>
        <label className='fs-5 mt-4'>Title : </label>
        <input type="string" className='form-control'
        placeholder='Enter title here ...'
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value)
        }}
        />
      </div>
      <div>
        <label className='fs-5 mt-4'>Description : </label> 
        <input type="string" className='form-control'
        placeholder='Enter the description ...'
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value) 
        }}
        />
      </div>

      <div>
        <label className='fs-5 mt-4'>Priority : </label>
        <input type ="string" className='form-control'
        placeholder='Enter priority here...'
        value={priority}
        onChange={(e) =>{
          setPriority(e.target.value)
        }}
        />
      </div>

      <div className='text-center'>
        <button  type="button" className='mt-4' onClick={addNote}>
          Add Task To Note
        </button>
      </div>
      </form>
    </div>

    <div className='savenote-container mt-5'>
      <form>
        <h2>All Notes</h2>
      </form>

    </div>


    </div>

       
    </div>

    </>

  );
}

export default App;
