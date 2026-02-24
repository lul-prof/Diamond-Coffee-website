import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets.js'
import './Navbar.css'
import SideMenu from '../SideMenu/SideMenu.jsx'
import { Link, useNavigate } from 'react-router-dom';
import Register from '../../pages/Register/Register.jsx';
import toast from 'react-hot-toast';
import { ShopContext } from '../../context/ShopContext.jsx';




const Navbar = () => {
  const {getCartCount}=useContext(ShopContext);
  const navigate=useNavigate();
  const [clicked,setClicked]=useState(false);
  const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const token=localStorage.getItem("token");
  useEffect(()=>{
    
  },[token])
  return (
    <>
    
    <div className="navbar">
        <div className="nav-left">
            <img src={assets.logo} onClick={() => scrollToSection("home") || navigate('/')} alt="" />
        </div>

        <div className="nav-center">
          <nav>
            <ul>
              <li onClick={() => scrollToSection("home") || navigate('/')}>Home</li>
              <li onClick={() => scrollToSection("blog") || navigate('/')}>Blog</li>
              <li onClick={() => scrollToSection("about") || navigate('/')}>About Us</li>
              <Link to="/contact"> <li>Contact Us</li></Link>
            </ul>
          </nav>
        </div>

        <div className="nav-right">

          <div className="nav-user-icon">
            {/*onClick={()=>(document.getElementById("user-hover").style.display="flex")}*/}
           <img onClick={()=>(setClicked(!clicked),clicked?document.getElementById("user-hover").style.display="flex":document.getElementById("user-hover").style.display="none")}  src={assets.UserIcon} alt="" />
            <div className="user-hover" id='user-hover'>
              <nav>
              <ul>
                <li onClick={()=>toast.error("feature under development")}>Dashboard</li>
                <li onClick={()=>toast.error("feature under development")}>My Chats</li>
               <Link to='/orders'><li>My orders</li></Link> 
                {
                  !token
                  ?
                  <li onClick={()=>(navigate("/register"),setClicked(!clicked))}>Register</li>
                  :
                  <li onClick={()=>(localStorage.removeItem("token"),navigate('/'),toast.success("logged out successfully"))}>Logout</li>
                }
              </ul>
            </nav>
            </div>
          </div>

          <div className="nav-cart-icon">
          <Link to='/cart'><img src={assets.CartIcon} alt="" /></Link>
          <div style={{display:getCartCount()===0?"none":"block"}} className="cart-count">
            <p>{getCartCount()}</p>
          </div>
          </div>

          <div className="nav-side-menu" id='nav-side-menu'>
            <img onClick={()=>(document.getElementById("nav-sidemenu").style.display="block")} src={assets.MenuIcon} alt="" />
            <div className="nav-sidemenu" id='nav-sidemenu'>
                    <nav>
                        <ul>
                            <li onClick={() => scrollToSection("home") || navigate('/')}>Home</li>
                            <hr />
                            <li onClick={() => scrollToSection("blog") || navigate('/')}>Blog</li>
                            <hr />
                            <li onClick={() => navigate('/products')}>Products</li>
                            <hr />
                            <li onClick={() => scrollToSection("about") || navigate('/')}>About Us</li>
                            <hr />
                            <li onClick={() => scrollToSection("testimonials") || navigate('/')}>Testimonials</li>
                            <hr />
                            <li onClick={() => navigate('/contact')}>Contact Us</li>
                            <hr />
                            <img onClick={()=>(document.getElementById("nav-sidemenu").style.display="none")} src={assets.CloseIcon} alt="" />
                        </ul>
                    </nav>
                </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Navbar