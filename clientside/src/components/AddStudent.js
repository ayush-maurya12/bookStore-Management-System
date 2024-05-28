import React, { useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddStudent = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[rollno,setRollno]=useState('');
    const[grade,setGrade]=useState("");
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/student/register',{rollno,username,password,grade})
        .then(res=>{
          console.log(res)
          if(res.data.registred){
            navigate('/students')
          }
        })
        .catch(err=>console.log(err))
      }
    
  return (
    <div className='main'>
    <div className="container">
    <form onSubmit={submitHandler}>
    <h2>Add Studnet</h2>
        <div className="form-group">
            <label htmlFor="rollno">Roll No:</label>
            <input type="text" id="rollno" name="rollno" required
             onChange={(e)=>setRollno(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" name="username" required
              onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Grade:</label>
            <input type="text" id="grade"
                 onChange={(e)=>setGrade(e.target.value)}
            />       
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
             onChange={(e)=>setPassword(e.target.value)}
            />       
        </div>
        <div className="form-group">
            <button type='submit' value="login">Register</button>
        </div>
        </form>
</div>
</div>
  )
}

export default AddStudent