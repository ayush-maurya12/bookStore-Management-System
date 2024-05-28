import React from 'react'
import '../css/book.css';
import { Link } from 'react-router-dom';


const Bookcard = ({book,key,role}) => {
    const{name,author,imageurl}=book;
  return (
    <div className='book-card'>
    <img src={imageurl} alt={name} className='book-image'/>
    <div className='book-details'>
    <h3>{name}</h3>
    <p>{author}</p>
    </div>
    {role==="admin" &&
    <div className='book-actions'>
    <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
    <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
    </div>
    }
    </div>
  )
}

export default Bookcard