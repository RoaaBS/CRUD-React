 import React from 'react'
 import Navbar from './Components/Navbar/Navbar';
 import Footer from './Components/Footer/Footer'
 import Home from './Components/Home/Home'
 import User from './Components/User/User'
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
 import {Routes,Route} from 'react-router-dom'
import Create from './Components/Create/Create';
import Details from './Components/User/Details';
 export default function App() {
   return (
     <div>
       <Navbar/>
       <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='*' element={<h2>Page Not Found</h2>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path="/users/:id" element={<Details />} />

          
        </Routes>
       </div>
       <Footer/>
     </div>
   )
 }
 