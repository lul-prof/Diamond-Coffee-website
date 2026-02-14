import React from 'react'
import './SideMenu.css'
import { assets } from '../../assets/assets'

const SideMenu = () => {
  return (
    <div className="sidemenu">
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
  )
}

export default SideMenu