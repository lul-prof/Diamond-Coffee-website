import React from 'react'
import './SingleBlog.css'
import { useParams } from 'react-router-dom'
import { BlogStories } from '../../assets/assets'

const SingleBlog = () => {
    const { id }=useParams();
    const blog=BlogStories[id];
  return (
    <>
    <div className="single-blog-container">
        <div className="single-blog-image">
            <img src={blog.image} alt="" />
        </div>
        <div className="single-blog-text">
            <h1> {blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    </div>

    <div className="single-blog-latest">
        <h1>You Might Also Like</h1>
        <hr />
    </div>
    </>
  )
}

export default SingleBlog