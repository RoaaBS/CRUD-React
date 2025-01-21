 import React from 'react'
 import './Navbar.css'
 import { Link } from 'react-router-dom';


 export default function Navbar() {
   return (
     <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <a className="navbar-brand " href="#">Navbar</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/user'}>User</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/create'}>Create</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

     </div>
   )
 }
 