import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      {/*---------------------*/}
      <div className="footer-left">
        <h3>Quick Links</h3>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Website</p>
      </div>
      {/*---------------------*/}
      <div className="footer-right">
        <h3>Contacts</h3>
        <p>Nyuki,Close Gikomba</p>
        <p>Manager: Yasmin Khan</p>
        <p>Director: Paras Shah</p>
        <p>Director: Sanjeev Shah</p>
        <p>Phone: 0711880076</p>
      </div>
    </div>
  )
}

export default Footer