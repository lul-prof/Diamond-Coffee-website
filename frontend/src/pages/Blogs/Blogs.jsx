import React from 'react'
import './Blogs.css'
import { BlogStories } from '../../assets/assets'
import Blog from '../../components/Blog/Blog'

const Blogs = () => {
    const Stories=BlogStories
  return (
    <>
        <div className="blogs-header" id='blog'>
            <h2>Our Stories</h2>
        </div>

        <div className="blogs-container">
            {
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