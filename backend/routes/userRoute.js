import express from 'express'
import {addComplain, addSubscriber, addTestimonial, addToCart, contactUs, fetchBlog, fetchBlogs, fetchProduct, fetchProducts, fetchTestimonials, getUserCart, loginUser, myOrders, placeOrder, registerUser, searchProducts, updateCart} from '../controllers/userController.js';
import authUser from '../middleware/userAuth.js';

const userRouter=express.Router();


userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/testimonial',authUser,addTestimonial);
userRouter.post('/complain',authUser,addComplain);
userRouter.post('/subscribe',addSubscriber);
userRouter.get('/blogs',fetchBlogs);
userRouter.get('/blog/:_id',fetchBlog);
userRouter.get('/products',fetchProducts);
userRouter.get('/product/:_id',fetchProduct);
userRouter.get('/testimonials',fetchTestimonials);
userRouter.get('/search',searchProducts);
userRouter.post('/addToCart',authUser,addToCart);
userRouter.post('/updateCart',authUser,updateCart);
userRouter.post('/myCart',authUser,getUserCart);
userRouter.post('/contact',contactUs);

userRouter.post('/placeOrder',authUser,placeOrder)
userRouter.post('/myOrders',authUser,myOrders);



export default userRouter;
