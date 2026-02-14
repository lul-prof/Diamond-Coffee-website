import React from 'react'
import { assets } from '../../assets/assets.js'
import './Navbar.css'
import SideMenu from '../SideMenu/SideMenu.jsx'
import { Link, useNavigate } from 'react-router-dom';
import Register from '../../pages/Register/Register.jsx';


const Navbar = () => {
  const navigate=useNavigate();
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
           <img src={assets.UserIcon} onClick={()=>navigate("/register")} alt="" />
            <div className="user-hover" id='user-hover'>
              <nav>
              <ul>
                <li>Dashboard</li>
                <li>Products</li>
                <li>My orders</li>
                <li>Logout</li>
              </ul>
            </nav>
            </div>
          </div>

          <div className="nav-cart-icon">
          <Link to='/cart'><img src={assets.CartIcon} alt="" /></Link>
          </div>

          <div className="nav-side-menu">
            <img src={assets.MenuIcon} alt="" />
            <div className="nav-sidemenu">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <hr />
                            <li>Blog</li>
                            <hr />
                            <li>Products</li>
                            <hr />
                            <li>About Us</li>
                            <hr />
                            <li>Testimonials</li>
                            <hr />
                            <li>Contact Us</li>
                            <hr />
                            <img src={assets.CloseIcon} alt="" />
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