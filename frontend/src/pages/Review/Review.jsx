import React, { useEffect, useState } from 'react'
import './Review.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Review = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [testimonial,setTestimonial]=useState("")
    

    const backend_url=import.meta.env.VITE_BACKEND_URI;
    const [token,setToken]=useState("");
    const navigate=useNavigate();
    const registerRedirect=()=>{
        try {
            navigate('/register');
            toast.success("Register to proceed")
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    useEffect(()=>{
        const fetchToken=async()=>{
            try {
                setToken(localStorage.getItem("token"))
            } catch (error) {
                console.log(error);
                toast.error(error)
            }
        }
        fetchToken();
        //localStorage.removeItem("token")
        
    },[token])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(`${backend_url}/api/user/testimonial`,{avatar:name,username:name,email,testimonial})
            console.log(response);
            if(response.data.success){
                navigate('/');
                toast.success(response.data.message);
            }else{
                toast.success(response.data.message);
            }
            
        } catch (error) {
            console.log(error); 
        }
    }
  return (
   <>
   {
    !token || token===""
    ?
    registerRedirect()
    :
     <div className="review-container">
        <div style={{justifySelf:"center"}} className="review-header">
            <h2>Your Honest Testimonial</h2>
        </div>
        <div className="review-form">
            <form method='post' onSubmit={handleSubmit}>
                <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Your name'/>
                <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Your Email'/>
                <input type="text" name="testimonial" id="" onChange={(e)=>setTestimonial(e.target.value)} value={testimonial} placeholder='Your Testimonial'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
   }
   </>
  )
}

export default Review