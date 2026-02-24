import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Register = () => {
  const {backend_url}=useContext(ShopContext);  
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("user");
  const [county, setcounty] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (register) {
        if (password1 === password2) {
          const response = await axios.post(
            `${backend_url}/api/user/register`,
            { username, email, phone, category, county, password: password1 },
          );
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate('/');
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("password do not match");
        }
      } else {
        const response = await axios.post(`${backend_url}/api/user/login`, {
          username,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate('/');
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const savedToken=localStorage.getItem("token");

  const existsRedirect=()=>{
    try {
      navigate('/');
      toast.success('Already Logged In');
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      {
        savedToken 
        ?
        existsRedirect()
        :
        <div className="register-container">
        <div className="register-form-header">
          <h1>Create Account</h1>
        </div>
        <div className="register-form-container">
          <form method="post" onSubmit={handleSubmit}>
            {register ? (
              <>
                <div className="register-avatar">
                  <img src={assets.UserIcon} alt="" />
                </div>
                <input
                  type="name"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id=""
                  placeholder="username"
                />
                <br></br>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id=""
                  placeholder="Email Address"
                />
                <br></br>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  id=""
                  placeholder="phone"
                />
                <br />
                <input
                  type="text"
                  name="county"
                  onChange={(e) => setcounty(e.target.value)}
                  value={county}
                  id=""
                  placeholder="County"
                />
                <br />
                <label htmlFor="category">Category</label>
                <br />
                <select
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  id="category"
                >
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                  <option value="user">User</option>
                  <option value="investor">Investor</option>
                </select>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword1(e.target.value)}
                  value={password1}
                  id=""
                  placeholder="Password"
                />
                <br />
                <input
                  type="password"
                  name="password2"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                  id=""
                  placeholder="confirm Password"
                />
                <br />
                {password1 !== password2 && password2 !== "" && (
                  <label htmlFor="">Passwords do not match</label>
                )}
                <button type="submit">Register</button>
                <p onClick={() => setRegister(!register)}>
                  Already have an account?<b>Login</b>
                </p>
              </>
            ) : (
              <>
                <input
                  type="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id=""
                  placeholder="Username"
                />
                <br></br>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id=""
                  placeholder="Password"
                />
                <br />
                <button type="submit">Login</button>
                <p onClick={() => setRegister(!register)}>
                  Don't have an account?<b>Register</b>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
      }
    </>
  );
};

export default Register;
