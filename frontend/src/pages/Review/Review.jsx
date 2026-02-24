import React, { useContext, useState } from 'react'
import './Review.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'



const Review = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [testimonial,setTestimonial]=useState("")
    
    const {backend_url,token}=useContext(ShopContext);

    const navigate=useNavigate();
    const registerRedirect=()=>{
        try {
            navigate('/register');
            toast.success("Register to proceed")
        } catch (error) {
            toast.error(error);
        }
    }
   

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(`${backend_url}/api/user/testimonial`,{avatar:name,username:name,email,testimonial},{headers:{token}})
            if(response.data.success){
                navigate('/');
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
            
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
                <div className="complain-link">
                   <Link to='/complain' ><p style={{color:"black"}}>Want to complain?Click me</p></Link> 
                </div>
            </form>
        </div>
    </div>
   }
   </>
  )
}

export default Review