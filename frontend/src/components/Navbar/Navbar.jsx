import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'
import './Navbar.css'
import SideMenu from '../SideMenu/SideMenu.jsx'
import { Link, useNavigate } from 'react-router-dom';
import Register from '../../pages/Register/Register.jsx';


const Navbar = () => {
  const navigate=useNavigate();
  const [clicked,setClicked]=useState(false);
  const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
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
                <li>Dashboard</li>
                <li>My Chats</li>
                <li>My orders</li>
                <li onClick={()=>(navigate("/register"),setClicked(!clicked))}>Register</li>
              </ul>
            </nav>
            </div>
          </div>

          <div className="nav-cart-icon">
          <Link to='/cart'><img src={assets.CartIcon} alt="" /></Link>
          </div>

          <div className="nav-side-menu" id='nav-side-menu'>
            <img onClick={()=>(document.getElementById("nav-sidemenu").style.display="flex")} src={assets.MenuIcon} alt="" />
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
                            <li onClick={() => navigate('/contacts')}>Contact Us</li>
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