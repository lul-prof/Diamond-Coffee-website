import React, { useEffect } from "react";
import "./HomePage.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  //Add Product
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  //Add Blog
  const [blogImage1, setBlogImage1] = useState(null);
  const [blogImage2, setBlogImage2] = useState(null);

  const [blogTitle, setBlogTitle] = useState("blog");
  const [blogDescription, setBlogDescription] = useState("blog description");

  /*-----------------------------------*/
  const [profile, setProfile] = useState(false);
  const [shop, setShop] = useState(false);
  const [stats, setStats] = useState(false);
  const [users, setUsers] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  const [complains, setComplains] = useState(false);
  const [chat, setChat] = useState(false);
  const [logout, setLogout] = useState(false);

  const [blogss, setBlogss] = useState([]);
  const [products, setProducts] = useState([]);
  const [registeredUsers,setRegisteredUsers]=useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      blogImage1 && formData.append("image1", blogImage1);
      blogImage2 && formData.append("image2", blogImage2);
      formData.append("title", blogTitle);
      formData.append("description", blogDescription);
      const response = await axios.post(
        `${backend_url}/api/admin/addBlog`,
        formData,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/user/blogs`);
        console.log("Blogs",response);
        if (response.data.success) {
          setBlogss(response.data.blogs);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/user/products`);
        console.log("Products",response);
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          console.log(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUsers=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/users`);
        console.log("Users",response);
        if(response.data.success){
          setRegisteredUsers(response.data.users);
        }else{
          console.log(response.data.message);
          
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
    fetchBlogs();
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("price", price);
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        `${backend_url}/api/admin/addProduct`,
        formData,
      );
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="home-container">
        {/*-------------------------------*/}
        <div className="home-action-btns">
          <div className="action-btn action-btn-1">
            <button
              onClick={() => (
                setProfile(!profile),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Profile
            </button>
          </div>
          <div className="action-btn action-btn-2">
            <button
              onClick={() => (
                setProfile(false),
                setShop(!shop),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Manage shop
            </button>
          </div>
          <div className="action-btn action-btn-2">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(!stats),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Statistics
            </button>
          </div>
          <div className="action-btn action-btn-3">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(!users),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Manage Users
            </button>
          </div>
          <div className="action-btn action-btn-4">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(!employees),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Manage Employees
            </button>
          </div>
          <div className="action-btn action-btn-5">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(!blogs),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Manage Blogs
            </button>
          </div>
          <div className="action-btn action-btn-6">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(!jobs),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Weekly Job Lists
            </button>
          </div>
          <div className="action-btn action-btn-7">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(!testimonials),
                setComplains(false),
                setChat(false),
                setLogout(false)
              )}
            >
              Testimonials
            </button>
          </div>
          <div className="action-btn action-btn-8">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(!complains),
                setChat(false),
                setLogout(false)
              )}
            >
              complains&suggestions
            </button>
          </div>
          <div className="action-btn action-btn-9">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(!chat),
                setLogout(false)
              )}
            >
              Group chat
            </button>
          </div>
          <div className="action-btn action-btn-10">
            <button
              onClick={() => (
                setProfile(false),
                setShop(false),
                setStats(false),
                setUsers(false),
                setEmployees(false),
                setBlogs(false),
                setJobs(false),
                setTestimonials(false),
                setComplains(false),
                setChat(false),
                setLogout(!logout)
              )}
            >
              Logout
            </button>
          </div>
        </div>

        {/*-------------------------------*/}
        <div className="home-content-tabs">
          {profile ? (
            <>
              <div className="profile-tab">
                <p>Profile</p>
              </div>
            </>
          ) : shop ? (
            <>
              <div className="shop-tab">
                <div className="shop-tab-right">
                  <h2>Add Product</h2>
                  <form onSubmit={handleSubmit} method="post">
                    <div className="form-class-img">
                      <div>
                        <img
                          src={
                            !image1
                              ? assets.AddIcon
                              : URL.createObjectURL(image1)
                          }
                          alt=""
                        />
                        {!image1 ? "Upload a file" : image1.name}
                        <input
                          type="file"
                          name="image1"
                          id=""
                          style={{
                            width: "100%",
                            border: "0",
                            backgroundColor: "transparent",
                          }}
                          onChange={(e) => setImage1(e.target.files[0])}
                        />
                      </div>

                      <div>
                        <img
                          src={
                            !image2
                              ? assets.AddIcon
                              : URL.createObjectURL(image2)
                          }
                          alt=""
                        />
                        {!image2 ? "Upload a file" : image2.name}
                        <input
                          type="file"
                          name="image2"
                          id=""
                          style={{
                            width: "100%",
                            border: "0",
                            backgroundColor: "transparent",
                          }}
                          onChange={(e) => setImage2(e.target.files[0])}
                        />
                      </div>

                      <div>
                        <img
                          src={
                            !image3
                              ? assets.AddIcon
                              : URL.createObjectURL(image3)
                          }
                          alt=""
                        />
                        {!image3 ? "Upload a file" : image3.name}
                        <input
                          type="file"
                          name="image3"
                          id=""
                          style={{
                            width: "100%",
                            border: "0",
                            backgroundColor: "transparent",
                          }}
                          onChange={(e) => setImage3(e.target.files[0])}
                        />
                      </div>

                      <div>
                        <img
                          src={
                            !image4
                              ? assets.AddIcon
                              : URL.createObjectURL(image4)
                          }
                          alt=""
                        />
                        {!image4 ? "Upload a file" : image4.name}
                        <input
                          type="file"
                          name="image4"
                          id=""
                          style={{
                            width: "100%",
                            border: "0",
                            backgroundColor: "transparent",
                          }}
                          onChange={(e) => setImage4(e.target.files[0])}
                        />
                      </div>
                    </div>

                    <div className="form-class">
                      <label htmlFor="">product title</label>
                      <br />
                      <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        id=""
                      />
                    </div>

                    <div className="form-class">
                      <label htmlFor="">product Description</label>
                      <br />
                      <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        id=""
                      />
                    </div>

                    <div className="form-class">
                      <label htmlFor="">product Quantity</label>
                      <br />
                      <input
                        type="text"
                        name="quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        id=""
                      />
                    </div>

                    <div className="form-class">
                      <label htmlFor="">product Price</label>
                      <br />
                      <input
                        type="text"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        id=""
                      />
                    </div>

                    <div className="form-btn">
                      <button type="submit">Add</button>
                    </div>
                  </form>
                </div>
                <div className="shop-tab-left">
                  <h2>Products</h2>
                  <hr />
                  {
                  products.length>=0
                  ?
                  products.map((product, index) => (
                    <>
                    <hr/>
                    <div key={index} className="product-details">
                      <div className="product-image">
                        <img src={product.images[0]} alt="" />
                      </div>
                      <div className="product-title">
                        <h6>{product.title}</h6>
                      </div>
                      <div className="product-price">
                        <p>{product.price}</p>
                      </div>
                      <div className="product-btn">
                        <img src={assets.DeleteIcon} alt="" />
                        <img src={assets.EditIcon} alt="" />
                      </div>
                    </div>
                    <hr/>
                    </>
                    
                  ))
                  :
                    <>
                    <h5>No products yet</h5>
                    </>
                  }
                  <hr />
                </div>
              </div>
            </>
          ) : stats ? (
            <>
              <div className="stats-tab">
                <p>Stats</p>
              </div>
            </>
          ) : users ? (
            <>
              {
                registeredUsers.length>0
                ?
                
                registeredUsers.map((u,index)=>(
                  <>
                  <hr style={{border:"1px solid burlywood"}}/>
                  <div key={index} className="users-tab" style={{display:"flex",gap:"2rem",padding:"10px"}}>
                    <div className="user-avatar">
                      <img style={{maxWidth:"80px"}} src={registeredUsers.avatar} alt="avatar" />
                    </div>
                    <p><b>Name:</b> {u.username}</p>
                    <p><b>Phone:</b> {u.phone}</p>
                    <p><b>Email:</b> {u.email}</p>
                    <p><b>County:</b> {u.county}</p>
                    <p><b>Category:</b> {u.category}</p>
                    
                  </div>
                  </>
                 
                ))
                
                :
                <>
                <h5>No registered Users</h5>
                </>
              }
            </>
          ) : employees ? (
            <>
              <div className="employees-tab">
                <p>Employees</p>
              </div>
            </>
          ) : blogs ? (
            <>
              <div className="blogs-tab">
                <div className="blog-tab-right">
                  <h2>Add Blog</h2>
                  <form
                    className="blog-form"
                    method="post"
                    onSubmit={handleBlogSubmit}
                  >
                    <div
                      className="blog-form-images"
                      style={{ display: "flex", gap: "2rem", width: "100%" }}
                    >
                      <div className="blog-form-class-img">
                        <img
                          src={
                            !blogImage1
                              ? assets.AddIcon
                              : URL.createObjectURL(blogImage1)
                          }
                          alt=""
                        />
                        <input
                          style={{ border: "0" }}
                          type="file"
                          onChange={(e) => setBlogImage1(e.target.files[0])}
                          name="blogImage1"
                          id=""
                        />
                      </div>

                      <div className="blog-form-class-img">
                        <img
                          src={
                            !blogImage2
                              ? assets.AddIcon
                              : URL.createObjectURL(blogImage2)
                          }
                          alt=""
                        />
                        <input
                          style={{ border: "0" }}
                          type="file"
                          onChange={(e) => setBlogImage2(e.target.files[0])}
                          name="blogImage2"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="blog-form-class">
                      <label htmlFor="">Blog title</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => setBlogTitle(e.target.value)}
                        value={blogTitle}
                        name="blogTitle"
                        id=""
                      />
                    </div>

                    <div className="blog-form-class">
                      <label htmlFor="">Blog Description</label>
                      <br />
                      <input
                        type="text"
                        name="blogDescription"
                        onChange={(e) => setBlogDescription(e.target.value)}
                        value={blogDescription}
                        id=""
                      />
                    </div>

                    <div className="blog-form-btn">
                      <button type="submit">Post</button>
                    </div>
                  </form>
                </div>
                <div className="blog-tab-left">
                  <h2>Blogs</h2>
                  <hr />
                  {blogss.length > 0 ? (
                    blogss.map((item, index) => (
                    <>
                    <hr />
                      <div key={index} className="blog-details">
                        <div className="blog-image">
                          <img src={item.images[0]} alt="" />
                        </div>
                        <div className="blog-title">
                          <h6>{item.title}</h6>
                        </div>
                        <div className="blog-btn">
                          <img src={assets.DeleteIcon} alt="" />
                          <img src={assets.EditIcon} alt="" />
                        </div>
                      </div>
                      <hr />
                      </>
                    ))
                  ) : (
                    <>
                      <h3>No Blogs Yet</h3>
                    </>
                  )}
                  <hr />
                </div>
              </div>
            </>
          ) : jobs ? (
            <>
              <div className="jobs-tab">
                <p>Jobs</p>
              </div>
            </>
          ) : testimonials ? (
            <>
              <div className="testimonials-tab">
                <p>Testimonials</p>
              </div>
            </>
          ) : complains ? (
            <>
              <div className="complains-tab">
                <p>Complains</p>
              </div>
            </>
          ) : chat ? (
            <>
              <div className="chats-tab">
                <p>Chats</p>
              </div>
            </>
          ) : logout ? (
            <>
              <div className="logout-tab">
                <p>Logout</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
