import React, { useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login = ({setRolevar}) => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[role,setRole]=useState('admin');
  const navigate=useNavigate()

  axios.defaults.withCredentials=true;

  const formhandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/auth/login',{username,password,role})
    .then(res=>{
      console.log(res)
      alert(res.data.message)
      if(res.data.login && res.data.role==='admin'){
        setRolevar(res.data.role);
        navigate('/dashboard')
      }else if(res.data.login && res.data.role==='student'){
        setRolevar(res.data.role);
        console.log(res)
        navigate('/')
      }
    })
    .catch(err=>{})
  }
  return (
    <div className='main'>
<div className="container">
    <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="fullname">Username:</label>
            <input type="text" id="fullname" name="fullname" placeholder='Enter Username'
             onChange={(e)=>setUsername(e.target.value)}  required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="email" name="password" required placeholder='Enter Password'
              onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Role</label>
            <select className="login-option"
            onChange={(e)=>setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
        </div>
        <div className="form-group">
            <button value="login" onClick={formhandler} className='button'><p>Login</p></button>
        </div>
</div>
</div>
  )
}

export default Login