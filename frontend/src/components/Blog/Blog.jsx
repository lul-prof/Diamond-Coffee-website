import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  
  return (
    <>
  <Link to={`/blog/${props.index}`}> <div className="blog-container">
        <div className="blog-content">
            
            <div className="blog-image">
                <img src={props.image} alt="" />
            </div>
            

            <h3>{props.title}</h3>
            <div className="blog-text">
                <p>{props.description}</p>
            </div>

            
        </div>
    </div></Link> 
    </>
  )
}

export default Blog