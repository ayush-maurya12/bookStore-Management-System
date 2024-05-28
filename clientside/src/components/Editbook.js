import React, { useEffect, useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Editbook = () => {
    const[name,setName]=useState('')
    const[author,setAuthor]=useState("");
    const[imageurl,setImageurl]=useState("");
    const navigate=useNavigate()
    const{id}=useParams()

    useEffect(()=>{
        axios.get('http://localhost:3001/book/book/'+id,{name,author,imageurl})
        .then(res=>{
            setName(res.data.name)
            setAuthor(res.data.author)
            setImageurl(res.data.imageurl)
            console.log(res)
        })
        .catch(err=>console.log(err))   
    },[])

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/book/book/'+id,{name,author,imageurl})
        .then(res=>{
          console.log(res)
          if(res.data.updated){
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
    <h2>Edit Book</h2>
        <div className="form-group">
            <label htmlFor="book">Book Name:</label>
            <input type="text" id="book" name="book" value={name} required
             onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="auther">Auther Name:</label>
            <input type="text" id="auther" name="auther" value={author} required
              onChange={(e)=>setAuthor(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="image">Image :</label>
            <input type="text" id="grade" value={imageurl}
                 onChange={(e)=>setImageurl(e.target.value)}
            />       
        </div>
        <div className="form-group">
            <button type='submit'>Update</button>
        </div>
        </form>
</div>
</div>
  )
}

export default Editbook 