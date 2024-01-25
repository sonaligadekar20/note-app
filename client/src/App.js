import React, {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [user, setUser] = useState({});
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
    alert(response?.data?.message)  
  }

  return (
    <div className='main-container text-center'>
        <div className='addnote-container'>
      <form>
      <h2 className='text-center'> Add Note</h2>
      <div>
        <label>Title : </label>
        <input type="string" className='form-control'
        placeholder='Enter title here ...'
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value)
        }}
        />
      </div>
      <div>
        <label>Description : </label> 
        <input type="string" className='form-control'
        placeholder='Enter the description ...'
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value) 
        }}
        />
      </div>

      <div>
        <label>Priority : </label>
        <input type ="string" className='form-control'
        placeholder='Enter priority here...'
        value={priority}
        onChange={(e) =>{
          setPriority(e.target.value)
        }}
        />
      </div>

      <div>
        <button  type="button" onClick={addNote}>
          Add Task To Note
        </button>
      </div>
      </form>
    </div>

    <div className='savenote-container'>
      <form>
        <h2>All Notes</h2>
      </form>

    </div>

    </div>

  );
}

export default App;
