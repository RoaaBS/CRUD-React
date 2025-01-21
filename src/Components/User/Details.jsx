import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import './User.css';

export default function Details() {
  const { id } = useParams();
  const {register,handleSubmit,setValue}=useForm();
  const navigate =useNavigate();
  const getDetails = async()=>{
    const {data} =await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
setValue("userName",data.user.userName);
setValue("email",data.user.email);
setValue("phone",data.user.phone);
  }
  useEffect(()=>{
    getDetails();
  },[]);


  const UpdateUser= async(value)=>{
    const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
    {userName:value.userName});
    console.log(response);
    if(response.status ==200){
      navigate('/user');

  }
  }
  return (
    <>
     <form onSubmit={handleSubmit(UpdateUser)}>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="userName" placeholder=""
  {...register("userName")}/>
  <label htmlFor="text">User Name </label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="email" placeholder=""
  {...register("email")} disabled />
  <label htmlFor="email">Email </label>
  
</div>

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="phone" placeholder=""
  {...register("phone")}  disabled/>
  <label htmlFor="text">Phone</label>
</div>
<button type='submit' className='btn'> Update</button>
   </form>
 
    </>
  );
}
