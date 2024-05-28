import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Deletestudent = () => {
    const navigate=useNavigate()
    const{id}=useParams()

    useEffect(()=>{
        axios.delete('http://localhost:3001/student/student/'+id)
        .then(res=>{
            if(res.data.deleted){
                navigate('/students')
            }
        }).catch((err)=>console.log(err))
    },[])
}

export default Deletestudent