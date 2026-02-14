import React from 'react'
import './Contacts.css'
import MapComponent from '../../components/MapComponent/MapComponent'
import { Link } from 'react-router-dom'

const ContactsPage = () => {

  return (
    <div className="contact-container">

      <div className="contact-form">
        <div className="contacts-header">
          <h1>Feel free to reach us for inquiries</h1>
        </div>
          <form action="">

            <input type="text" name="" id="" placeholder='Your name' /><br/>
            <input type="text" name="" id="" placeholder='Your Email Address' /><br/>
            <textarea name="" id="" placeholder='Your Message' rows={5}></textarea>
          <div className="contact-form-btn">
              <button>
                Send Message
              </button>
            </div>       
          </form>

      </div>
     {/*Map Leaflet */}
      <div className="contact-map">
        <MapComponent/>
      </div>

    </div>
  )
}

export default ContactsPage