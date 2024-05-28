import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/studentinfo.css';
import { Link } from 'react-router-dom';


const Studentinfo = () => {
    const[students,setStudents]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3001/student/students')
      .then(res=>{
        setStudents(res.data)
        console.log(res.data)
        // console.log("Hello"+students.length)
      }).catch(err=>console.log(err))
    },[])
  return (
    <div className='studentinfo'>
    <div>
    <div>
    <h2 className='student-heading'>Student Information</h2>
    </div>
        <table className='student-table' cellspacing="5">
            <tr className='table-heading'>
                <th>Sr.No</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Action</th>
            </tr>
            <>
                {
                 students.map((student,index)=>(
                    <tr className='table-data'>
                        <td>{index+1}</td>
                        <td>{student.rollno}</td>
                        <td>{student.username}</td>
                        <td>{student.grade}</td>
                        <td><Link to={`/deletest/${student._id}`} className='btn--link'>Delete</Link>/<Link to={`/editst/${student._id}`} className='btn--link'>Edit</Link></td>
                    </tr>
                 ))   
                }
                </>
        </table>
        </div>
    </div>
  )
}

export default Studentinfo