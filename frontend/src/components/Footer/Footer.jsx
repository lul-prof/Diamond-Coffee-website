import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const admin_url=import.meta.env.VITE_ADMIN_URI; 
    const Year=()=>{
        return new Date().getFullYear()
    }
    const navigate=useNavigate();
    const scrollToSection = (id) => {
    navigate("/")
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  return (
    <>
    <div className="footer">
    <div className="footer-container">

        <div className="footer-left">
            <div className="footer-logo">
                <img src={assets.FooterLogo} onClick={() => scrollToSection("home")} alt="" />
            </div>
            <div className="footer-left-header">
                <h1>Quality Kenyan Coffee Exporters</h1>
            </div>
            <div className="footer-left-link">
                <h4><a href="https://portofolio-two-rosy-31.vercel.app/" target='_blank'>Developed by High Value Tech</a></h4>
            </div>

        </div>

        <div className="footer-center">
            <h1>SITE MAP</h1>
            <ul>
                <li onClick={() => scrollToSection("home")}>Home</li>
                <li onClick={() => scrollToSection("about")}>About Us</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
                <li onClick={()=>navigate({admin_url}) || ""}>Admin</li>
                <li onClick={() => scrollToSection("blog")}>Blogs</li>
            </ul>

        </div>
        
        <div className="footer-right">
            <h1>GET IN TOUCH</h1>
            <div className="footer-right-social-links">
               <a href="https://x.com/" target='_blank'><img src={assets.Twitter} alt="" /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={assets.Instagram} alt="" /></a>
                <a href="https://www.facebook.com/" target='_blank'><img src={assets.Facaebook} alt="" /></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={assets.LinkedIn} alt="" /></a>
            </div>

            <div className="footer-right-contacts">
                <p><b>Email: </b>info@diamondcoffee.co.ke</p>
                <p><b>Phone: </b>+254-711880076</p>
                <p>Nyuki close,Gikomba-Nairobi</p>
            </div>

           

            <div className="footer-right-newsletter">
                <h2>Subscribe to our mail</h2>
                 <hr />
                <form action="" method='' className='newsletter-form'>
                <input type="email" name="email" id="email" placeholder='Enter Your email adrress' />
                <br />
                <input type="submit" value="Subscribe" />
                </form>
            </div>

        </div>
        
    </div>
    <hr style={{border:"1px solid white",margin:"10px"}} />
    <div className="footer-copyright">
        <p>
            &copy; {Year()} Diamond Coffee Company Limited. All Rights Reserved
        </p>
    </div>
    </div>
    </>
  )
}

export default Footer