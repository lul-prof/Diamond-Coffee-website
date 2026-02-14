import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Register.css'

const Register = () => {
      const [register,setRegister]=useState(true)
  return (
    <div className="register-container">
        <div className="register-form-header">
                <h1>Create Account</h1>
            </div>
        <div className="register-form-container">
            <form action="">
                {register?
               (
                <>
                <div className="register-avatar">
                    <img src={assets.UserIcon} alt="" />
                </div>
                <input type="name" name='' id='' placeholder='username' /><br></br>
                <input type="email" name="" id=""  placeholder='Email Address'/><br></br>
                <input type="text" name='' id='' placeholder='phone' /><br/>
                <input type="text" name='' id='' placeholder='County' /><br/>
                <label htmlFor="category">Category</label><br/>
                <select name="category" id="category">
                    <option value="">Seller</option>
                    <option value="">Buyer</option>
                    <option value="">User</option>
                    <option value="">Investor</option>
                </select><br/>
                <input type="password" name="" id="" placeholder='Password' /><br/>
                <input type="password" name="" id="" placeholder='confirm Password' /><br/>
                <button>Register</button>
                <p onClick={()=>(setRegister(!register))}>Already have an account?<b>Login</b></p>
                </>)
                :
                (
                <>
                <input type="email" name="" id=""  placeholder='Email Address'/><br></br>
                <input type="password" name="" id="" placeholder='Password' /><br/>
                <button>Login</button>
                <p onClick={()=>setRegister(!register)}>Don't have an account?<b>Register</b></p>
                </>
                )
             }
            </form>

        </div>
    </div>

  )
}

export default Register