import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bookcard from './Bookcard'
import '../css/book.css';


const Books = ({role}) => {
  const[books,setBooks]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/book/books')
    .then(res=>{
      setBooks(res.data)
      console.log(res.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <div className='book-list'>
    {
      books.map(book=>{
       return <Bookcard key={book.id} book={book} role={role}></Bookcard>
      })
    }

    </div>
  )
}

export default Books