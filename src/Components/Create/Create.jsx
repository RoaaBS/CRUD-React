 import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
 import {useNavigate} from 'react-router-dom'
 import { DevTool } from "@hookform/devtools";
 import './Create.css'
 export default function Create() {
    const {register,control,handleSubmit}=useForm();
    const navigate =useNavigate();

   const registerUser = async(data)=>{
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,data);
    if(response.status ==201){
        navigate('/user');

    }

   }
   return (
     <>
<form onSubmit={handleSubmit(registerUser)}>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="userName" placeholder=""
  {...register("userName")}/>
  <label htmlFor="text">User Name</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="email" placeholder=""
  {...register("email")} />
  <label htmlFor="email">Email </label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="password" placeholder=""
  {...register("password")} />
  <label htmlFor="password">Password</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="phone" placeholder=""
  {...register("phone")} />
  <label htmlFor="text">Phone</label>
</div>
<button type='submit' className='btn'> Create</button>
   </form>
   <DevTool control={control} /> 
     </>
   )
 }
 