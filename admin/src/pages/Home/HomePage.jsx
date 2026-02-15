import React from 'react'
import './HomePage.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const HomePage = () => {
    const [profile,setProfile]=useState(false)
    const [shop,setShop]=useState(false)
    const [stats,setStats]=useState(false)
    const [users,setUsers]=useState(false)
    const [employees,setEmployees]=useState(false)
    const [blogs,setBlogs]=useState(false)
    const [jobs,setJobs]=useState(false)
    const [testimonials,setTestimonials]=useState(false)
    const [complains,setComplains]=useState(false)
    const [chat,setChat]=useState(false)
    const [logout,setLogout]=useState(false)
  return (
    <>

    <div className="home-container">
        {/*-------------------------------*/}
        <div className="home-action-btns">
            <div className="action-btn action-btn-1">
                <button onClick={()=>(setProfile(!profile),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Profile</button>
            </div>
            <div className="action-btn action-btn-2">
                <button onClick={()=>(setProfile(false),setShop(!shop),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Manage shop</button>
            </div>
            <div className="action-btn action-btn-2">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(!stats),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Statistics</button>
            </div>
            <div className="action-btn action-btn-3">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(!users),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Manage Users</button>
            </div>
            <div className="action-btn action-btn-4">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(!employees),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Manage Employees</button>
            </div>
            <div className="action-btn action-btn-5">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(!blogs),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Manage Blogs</button>
            </div>
            <div className="action-btn action-btn-6">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(!jobs),setTestimonials(false),setComplains(false),setChat(false),setLogout(false))}>Weekly Job Lists</button>
            </div>
             <div className="action-btn action-btn-7">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(!testimonials),setComplains(false),setChat(false),setLogout(false))}>Testimonials</button>
            </div>
             <div className="action-btn action-btn-8">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(!complains),setChat(false),setLogout(false))}>complains&suggestions</button>
            </div>
             <div className="action-btn action-btn-9">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(!chat),setLogout(false))}>Group chat</button>
            </div>
             <div className="action-btn action-btn-10">
                <button onClick={()=>(setProfile(false),setShop(false),setStats(false),setUsers(false),setEmployees(false),setBlogs(false),setJobs(false),setTestimonials(false),setComplains(false),setChat(false),setLogout(!logout))}>Logout</button>
            </div>
        </div>

        {/*-------------------------------*/}
        <div className="home-content-tabs">
            {
                profile?
                <>
                <div className="profile-tab">
                    <p>Profile</p>
                </div>
                </>
                : shop?
                <>
                <div className="shop-tab">
                    <div className="shop-tab-right">
                        <h2>Add Product</h2>
                    <form action="" method=''>

                        <div className="form-class-img">
                            <img src={assets.AddIcon} alt="" />
                            <img src={assets.AddIcon} alt="" />
                            <img src={assets.AddIcon} alt="" />
                            <img src={assets.AddIcon} alt="" />
                        </div>

                        <div className="form-class">
                            <label htmlFor="">product title</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-class">
                            <label htmlFor="">product Description</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-class">
                            <label htmlFor="">product Quantity</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-class">
                            <label htmlFor="">product Price</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-btn">
                            <button>Add</button>
                        </div>
                        
                    </form>
                    </div>
                    <div className="shop-tab-left">
                        <h2>Products</h2>
                        <hr />
                        <div className="product-details">
                            <div className="product-image">
                                <img src={assets.AddIcon} alt="" />
                            </div>
                            <div className="product-title">
                                <h3>Coffee</h3>
                            </div>
                            <div className="product-price">
                                <p>kes 1,200</p>
                            </div>
                            <div className="product-btn">
                                <img src={assets.DeleteIcon} alt="" />
                                <img src={assets.EditIcon} alt="" />
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                </>
                : stats?
                <>
                <div className="stats-tab">
                    <p>Stats</p>
                </div>
                </>
                : users?
                <>
                <div className="users-tab">
                    <p>Users</p>
                </div>
                </>
                :employees?
                <>
                <div className="employees-tab">
                    <p>Employees</p>
                </div>
                </>
                :blogs?
                <>
                <div className="blogs-tab">
                    <div className="blog-tab-right">
                        <h2>Add Blog</h2>
                    <form className='blog-form' action="" method=''>

                        <div className="blog-form-class-img">
                            <img src={assets.AddIcon} alt="" />
                        </div>

                        <div className="blog-form-class">
                            <label htmlFor="">Blog title</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="blog-form-class">
                            <label htmlFor="">Blog Description</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="blog-form-class">
                            <label htmlFor="">Tags</label><br/>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="blog-form-btn">
                            <button>Post</button>
                        </div>
                        
                    </form>
                    </div>
                    <div className="blog-tab-left">
                        <h2>Blogs</h2>
                        <hr />
                        <div className="blog-details">
                            <div className="blog-image">
                                <img src={assets.AddIcon} alt="" />
                            </div>
                            <div className="blog-title">
                                <h3>Coffee</h3>
                            </div>
                            <div className="blog-price">
                                <p>New partners</p>
                            </div>
                            <div className="blog-btn">
                                <img src={assets.DeleteIcon} alt="" />
                                <img src={assets.EditIcon} alt="" />
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                </>
                :jobs?
                <>
                <div className="jobs-tab">
                    <p>Jobs</p>
                </div>
                </>
                :testimonials?
                <>
                <div className="testimonials-tab">
                    <p>Testimonials</p>
                </div>
                </>
                :complains?
                <>
                <div className="complains-tab">
                    <p>Complains</p>
                </div>
                </>
                :chat?
                <>
                <div className="chats-tab">
                    <p>Chats</p>
                </div>
                </>
                :logout?
                <>
                <div className="logout-tab">
                    <p>Logout</p>
                </div>
                </>
            
                :<></>
            }
            
        </div>
    </div>
    
    </>

  )
}

export default HomePage