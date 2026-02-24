import React, { useContext, useState } from 'react'
import './Contacts.css'
import MapComponent from '../../components/MapComponent/MapComponent'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ShopContext } from '../../context/ShopContext'

const ContactsPage = () => {

  const {backend_url,token}=useContext(ShopContext);
  const [isLoading,setIsLoading]=useState(false)
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const navigate=useNavigate();

  const sendEmail=async(e)=>{
    e.preventDefault();
    try {
      setIsLoading(true);
      const response=await axios.post(`${backend_url}/api/user/contact`,{email,name,message},{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message);
        setIsLoading(false)
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }finally{
      navigate('/');
    }
  }

  return (
    <div className="contact-container">

      <div className="contact-form">
        <div className="contacts-header">
          <h1>Feel free to reach us for inquiries</h1>
        </div>
          <form method='post' onSubmit={sendEmail}>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" id="" placeholder='Your name' /><br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  name="" id="" placeholder='Your Email Address' /><br/>
            <textarea name="" value={message} onChange={(e)=>setMessage(e.target.value)}  id="" placeholder='Your Message' rows={5}></textarea>
          <div className="contact-form-btn">
              <button>
                {isLoading ? "Sending Message.." : "Send Message"}
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