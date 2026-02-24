import React, { useContext, useState } from 'react'
import './Complain.css'
import { ShopContext } from '../../context/ShopContext'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ComplainPage = () => {

    const {token,backend_url}=useContext(ShopContext);
    const navigate=useNavigate();

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [complain,setComplain]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(`${backend_url}/api/user/complain`,{avatar:name,username:name,email,complain},{headers:{token}})
            if(response.data.success){
                navigate('/');
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
            
        } catch (error) {
            toast.error(error)
        }
    }

    const registerRedirect=()=>{
        try {
            navigate('/register');
            toast.success("Register to proceed")
        } catch (error) {
            toast.error(error);
        }
    }
   
  return (
    <>

    {
        !token || token===""
        ?
        registerRedirect()
        :
        <div className="complain-container">
        <div style={{justifySelf:"center"}} className="complain-header">
            <h2>Your Opinion matter alot</h2>
        </div>
        <div className="complain-form">
            <form method='post' onSubmit={handleSubmit}>
                <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Your name'/>
                <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Your Email'/>
                <input type="text" name="complain" id="" onChange={(e)=>setComplain(e.target.value)} value={complain} placeholder='Your Complain or suggestion'/>
                <button type='submit'>Submit</button>
                <div className="complain-link">
                   <Link to='/review' ><p style={{color:"black"}}>Write a review? Click me</p></Link> 
                </div>
            </form>
        </div>
    </div>
    }
    
    </>
  )
}

export default ComplainPage