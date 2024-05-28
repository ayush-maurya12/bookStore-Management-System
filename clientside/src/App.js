
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import { useEffect, useState } from 'react';
import Logout from './components/Logout';
import axios from 'axios';
import Addbooks from './components/Addbooks';
import Editbook from './components/Editbook';
import Deletebook from './components/Deletebook';
import Studentinfo from './components/Studentinfo';
import Deletestudent from './components/Deletestudent';
import Editstudent from './components/Editstudent';

function App() {
  const [role,setRole]=useState('')

  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:3001/auth/verify')
    .then(res=>{
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole('')
      }
      console.log(res);
    }).catch(err=>console.log(err))
  },[])
  return (
   <BrowserRouter>
   <Navbar role={role}/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books" element={<Books role={role}/>}></Route>
      <Route path="/login" element={<Login setRolevar={setRole}/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/addstudent" element={<AddStudent/>}></Route>
      <Route path="/logout" element={<Logout setRolevar={setRole}/>}></Route>
      <Route path='/addbook' element={<Addbooks/>}></Route>
      <Route path='/book/:id' element={<Editbook/>}></Route>
      <Route path='/editst/:id' element={<Editstudent/>}></Route>
      <Route path='/delete/:id' element={<Deletebook/>}></Route>
      <Route path='/deletest/:id' element={<Deletestudent/>}></Route>
      <Route path='/students' element={<Studentinfo/>}></Route>
    </Routes> 
   </BrowserRouter>
  );
}

export default App;
