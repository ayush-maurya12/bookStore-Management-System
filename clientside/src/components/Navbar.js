import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const Navbar = ({role}) => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Book Store</Link>  
        </div>
        <div className='navbar-right'>
            {role==='student' && <>
            <Link to="/books" className="navbar-link">books</Link>
            </>}
            {role==='admin' && <>
             <Link to="/books" className="navbar-link">books</Link>
            <Link to="/addbook" className="navbar-link">Add Book</Link>
            <Link to="/addstudent" className="navbar-link">Add Student</Link>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <Link to="/students" className="navbar-link">Students Info</Link>  
            </> 
            }
            {role==="" ?
            <Link to="/login" className="navbar-link">login</Link>
            :<Link to="/logout" className="navbar-link">Logout</Link>

            }

        </div>
    </div>
  )
}

export default Navbar