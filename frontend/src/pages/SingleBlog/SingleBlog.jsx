/* eslint-disable no-unused-vars */
import React, {  useEffect, useState } from 'react'
import './SingleBlog.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BlogStories } from '../../assets/assets'
import axios from 'axios'
import toast from 'react-hot-toast'

const SingleBlog = () => {
    const { _id }=useParams();
    const [blog,setBlog]=useState([]);
    const [blogs,setBlogs]=useState([]);
    const [image,setImage]=useState([]);
    const url=import.meta.env.VITE_BACKEND_URI;
    const token=localStorage.getItem("token")
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchBlog=async()=>{
            try {
                const response=await axios.get(`${url}/api/user/blog/${_id}`);
                console.log(response);
                if(response.data.success){
                    setBlog(response.data.blog);
                    setImage(response.data.blog.images[0])
                    toast.success(response.data.message);
                }else{
                   toast.error(response.data.message); 
                }
            } catch (error) {
                console.log(error);
                toast.error(error);
            }
        }
        fetchBlog();
        //localStorage.removeItem("token")

        const fetchBlogs=async()=>{
            try {
                const response=await axios.get(`${url}/api/user/blogs`);
                console.log(response);
                if(response.data.success){
                    setBlogs(response.data.blogs);
                    toast.success(response.data.message);
                }else{
                   toast.error(response.data.message); 
                }
            } catch (error) {
                console.log(error);
                toast.error(error);
            }
        }
        fetchBlogs();
        console.log(token);
        
        
    },[_id,url])
  return (    
    <>
    {
        !token
        ?
       
        navigate('/register')
        
        :
        <>
        <div className="single-blog-container">
        <div className="single-blog-image">
            <img src={image} alt="" />
        </div>
        <div className="single-blog-text">
            <h1> {blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    </div>

    <div className="single-blog-latest">
        <h1>You Might Also Like</h1>
        
        {
            blogs.length>0
            ?
            blogs.map((b,i)=>(
                <div key={i} className="b-class">
                    <div className="b-image">
                        <img src={b.images[0]} alt="" />
                    </div>

                    <div className="b-title">
                        <h2>{b.title}</h2>
                    </div>

                    <div className="b-description">
                        <p>{b.description}</p>
                    </div>
                </div>
            ))
            :
            <></>
        }
        <hr />
    </div>       
        </>
    }
    </>
  )
}

export default SingleBlog