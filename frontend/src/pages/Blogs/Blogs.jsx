import React, { useContext, useEffect, useState } from 'react'
import './Blogs.css'
import { BlogStories } from '../../assets/assets'
import Blog from '../../components/Blog/Blog'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ShopContext } from '../../context/ShopContext'


const Blogs = () => {
    const Stories=BlogStories
    const [blogs,setBlogs]=useState([]);
    const {backend_url}=useContext(ShopContext);
    
    useEffect(()=>{
        const fetchBlogs=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/blogs`);
                if(response.data.success){
                    setBlogs(response.data.blogs);
                    toast.success(response.data.message);
                }else{
                    toast.error(response.data.message);
                }
                
            } catch (error) {
                toast.error(error);
            }
        }
        fetchBlogs();
    },[backend_url])
  return (
    <>
        <div className="blogs-header" id='blog'>
            <h2>Our Stories</h2>
        </div>

        <div className="blogs-container">

            {
                blogs.length>0
                ?
                blogs.map((blog,index)=>
                    <Blog
                    key={index}
                    index={blog._id}
                    image={blog.images[0]}
                    title={blog.title}
                    description={blog.description}
                    />
                )
                :
                Stories.map((story,index)=>
                    <Blog
                    key={index}
                    index={index}
                    image={story.image}
                    title={story.title}
                    description={story.description}
                    />
                )
            }
        </div>
    
    </>
  )
}

export default Blogs