import React, { useEffect, useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Editstudent = () => {
    const[username,setUsername]=useState("");
    const[rollno,setRollno]=useState('');
    const[grade,setGrade]=useState("");
    const navigate=useNavigate()
    const{id}=useParams();

    useEffect(()=>{
        axios.get('http://localhost:3001/student/student/'+id)
        .then((res)=>{
            setUsername(res.data.username)
            setRollno(res.data.rollno)
           setGrade(res.data.grade)
        })
    },[])

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/student/student/'+id,{rollno,username,grade})
        .then(res=>{
          console.log(res)
          if(res.data.updated){
            navigate('/students')
          }
        })
        .catch(err=>console.log(err))
      }
    
  return (
    <div className='main'>
    <div className="container">
    <form onSubmit={submitHandler}>
    <h2>Edit Studnet</h2>
        <div className="form-group">
            <label htmlFor="rollno">Roll No:</label>
            <input type="text" id="rollno" name="rollno" required value={rollno}
             onChange={(e)=>setRollno(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" name="username" required value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="grade">Grade:</label>
            <input type="text" id="grade" value={grade}
                 onChange={(e)=>setGrade(e.target.value)}
            />       
        </div>
        <div className="form-group">
            <button type='submit' value="login">Update</button>
        </div>
        </form>
</div>
</div>
  )
}

export default Editstudent