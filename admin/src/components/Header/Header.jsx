import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    const frontend_url=import.meta.env.VITE_FRONTEND_URI;  
  return (
    <>
    <div className="header-container">
        <div className="header-left">
            <img src={assets.HeaderIcon} alt="header" />
        </div>
        <div className="header-right">
            <div className="header-top">
                <p>Admin</p>
            </div>
            <div className="header-bottom">
                <div className="header-btn">
                <a href={frontend_url} target='_blank'><button>Home</button></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Header