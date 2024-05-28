import React, { useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Addbooks = () => {
    const[name,setName]=useState('')
    const[author,setAuthor]=useState("");
    const[imageurl,setImageurl]=useState("");
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/book/add',{name,author,imageurl})
        .then(res=>{
          console.log(res)
          if(res.data.added){
            navigate('/books')
          }else{
            console.log(res)
          }
        })
        .catch(err=>console.log(err))
      }
    
  return (
    <div className='main'>
    <div className="container">
    <form onSubmit={submitHandler}>
    <h2>Add Book</h2>
        <div className="form-group">
            <label htmlFor="book">Book Name:</label>
            <input type="text" id="book" name="book" required
             onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="auther">Auther Name:</label>
            <input type="text" id="auther" name="auther" required
              onChange={(e)=>setAuthor(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="image">Image :</label>
            <input type="text" id="grade"
                 onChange={(e)=>setImageurl(e.target.value)}
            />       
        </div>
        <div className="form-group">
            <button type='submit' className='button'><p>Add Book</p></button>
        </div>
        </form>
</div>
</div>
  )
}

export default Addbooks