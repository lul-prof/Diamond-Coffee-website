import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import testimonialModel from "../models/testimonialModel.js";
import complainModel from "../models/complainModel.js";
import subscriberModel from "../models/subscribeModel.js";
import blogModel from "../models/blogModel.js";
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import nodemailer from 'nodemailer'
import orderModel from '../models/orderModel.js';


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)//,{expiresIn:'1h'}
}


const registerUser=async(req,res)=>{
    try {
        const {username,email,category,county,phone,password}=req.body;
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists."})
        }
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);



        const new_user=new userModel({
            username,
            email,
            category,
            county,
            phone,
            password:hash,
        })
        const user=await new_user.save()
        const token=createToken(user._id);

        res.json({
            success:true, 
            message:"Registration successful",
            token
        })
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})   
    }
}

const loginUser=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const exists=await userModel.findOne({username});
        if(!exists){
            res.json({
                success:false,
                message:"Username does not exist"
            });
        }
        const isMatch=await bcrypt.compare(password,exists.password)
        if(isMatch){
            const userId=exists._id;
            const token=createToken(userId);
            res.json({
                success:true,
                message:"Login Successful",
                token
            });
        }
        res.json({
                success:false,
                message:"Check password and try again!!!"
        });
    } catch (error) {
        console.log(error);
        res.json({
                success:false,
                message:error.message
        });
        
    }
}

const addTestimonial=async(req,res)=>{
    try {
        const {avatar,email,username,testimonial}=req.body;

        const new_testimonial=new testimonialModel({
            avatar,
            email,
            username,
            testimonial
        });

        const testim=await new_testimonial.save();

        res.json({
            success:true,
            message:"Testimonial received for review.",
            testim
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

const addComplain=async(req,res)=>{
    try {
        const {avatar,username,email,complain}=req.body;

        const new_complain=new complainModel({
            avatar,
            username,
            email,
            complain
        });

        const newComplain=await new_complain.save();

        res.json({
            success:true,
            message:"Complain received for review."
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}


const addSubscriber=async(req,res)=>{
    try {
        const{email}=req.body;
        const new_subscriber=new subscriberModel({
            email,
        });
        const subscriber=await new_subscriber.save();

        res.json({
            success:true,
            message:"Thanks for subscribing."
        });

        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const fetchBlogs=async(req,res)=>{
    try {
        const blogs=await blogModel.find({});
        res.json({
            success:true,
            message:"blogs fetched successfully",
            blogs
        });
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const fetchBlog=async(req,res)=>{
    try {
        const _id=req.params._id;
        const blog=await blogModel.findById({_id});
        res.json({
            success:true,
            message:"blog fetched successfully",
            blog
        });

        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const fetchProducts=async(req,res)=>{
    try {
        const products=await productModel.find({});
        res.json({
            success:true,
            message:"Products fetched successfully",
            products
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

const fetchProduct=async(req,res)=>{
    try {
        const _id=req.params._id;
        const product=await productModel.findById({_id});
        res.json({
            success:true,
            message:"blog fetched successfully",
            product
        });        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const fetchTestimonials=async(req,res)=>{
    try {
        const testimonials=await testimonialModel.find({});
        res.json({
            success:true,
            message:"testimonials fetched successfully",
            testimonials
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}


//api/user/search?query=product
const searchProducts=async(req,res)=>{
    try {
        const {query}=req.query;
        const searchKey=new RegExp(query,'i');

        const results=await productModel.find({title:searchKey});

        res.json({
            success:true,
            message:searchKey+"fetched successfully",
            results
        });

        
    } catch (error) {
        console.log(error);
        
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

//cart
/*
const addToCart=async(req,res)=>{
    try {
        const {userId,itemId,size}=req.body;
        const userData=await userModel.findById(userId);
        // Retrieves the cart data
        let cartData=await userData.cartData;

        //If the item already exists in the cart 
        if(cartData[itemId]){
            //if that specific size exists.
            if(cartData[itemId][size]){
                //increases the quantity by 1
                cartData[itemId][size]+=1;
            }else{
                //initializes that size to 1.
                cartData[itemId][size]=1
            }
        }else{
            //If the item does not exist,create a new entry for the item
            cartData[itemId]={}
            //sets the size quantity to 1
            cartData[itemId][size]=1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({
            success:true,
            message:"Added to cart"
        });
        
    } catch (error) {
        console.log(error);
        
        res.json({
            success:false,
            message:error.message
        });
    }
}
*/

const addToCart=async(req,res)=>{
    try {
        const {userId,productId}=req.body;
        const user=await userModel.findById({_id:userId});
        const product=await productModel.findById({_id:productId});
        let cartData=await user.cartData;

        if(cartData[productId]){
            cartData[productId]+=1
        }else{
            cartData[productId]={}
            cartData[productId]=1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({
            success:true,
            message:"Product added to cart",
            cartData
        });
        
    } catch (error) {
        console.log(error);
        
        res.json({
            success:false,
            message:error.message
        });
    }
}
const updateCart=async(req,res)=>{
    try {
        const {userId,productId,quantity}=req.body

        const user=await userModel.findById({_id:userId})

        let cartData=await user.cartData;

        cartData[productId]=quantity;

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({
            success:true,
            message:"Cart updated",
            cartData
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })  
    }
}

//get user  cart
const getUserCart=async(req,res)=>{
    try {
        const {userId}=req.body

        const user=await userModel.findById({_id:userId});

        let cartData=await user.cartData;

        res.json({
            success:true,
            cartData
        })

        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}



//orders
const myOrders=async(req,res)=>{
    try {
        const {userId}=req.body;
        const orders=await orderModel.find({userId})
        res.json({
            success:true,
            message:"Yours orders fetched successfully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const placeOrder=async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body;

        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
        };

        console.log(orderData);
        const newOrder=new orderModel(orderData);
        await newOrder.save();
        console.log('====Order Queued For Processing====')
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
        console.log('====Order Addded to Orders====')
        res.json({ 
            success: true, 
            message: "Order Placed" 
        });
        
    } catch (error) {
        console.log(error);
        
        res.json({
            success:false,
            message:error.message
        });
    }
}


const contactUs=async(req,res)=>{
    try {
        const {email,name,message}=req.body;

        // 1. Create a transporter object using Gmail's SMTP
        const transporter = nodemailer.createTransport({
        //host: "smtp.ethereal.email",
        //port: 587,
        secure: true, 
        service:'gmail',
        auth: {
            user:process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
        });

        // 2. Set up email options (who sends what to whom)
        let mailOptions = {
            from: process.env.GMAIL_EMAIL, // Sender address (must be your Gmail)
            to: email, // Recipient(s) email address (comma-separated for multiple)
            subject: `Email Received ${name}`, // Subject line
            html: 
            `<b>${message}</b>
                <div style="width:100%;background-color:grey;padding:10px">
                    <h3>Diamond Coffee Company</h3>
                </div>
            ` 
        };

        //3. Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.json({
                    success:false,
                    message:error.message
                })
            } else {
                console.log('Email sent:', info.response);
                res.json({
                    success:true,
                    message:"Email sent",
                    info
                });
            }
        });
        
    } catch (error) {
        console.log(error);
        
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

export {registerUser,loginUser,addTestimonial,addComplain,addSubscriber,fetchBlogs,fetchProducts,fetchTestimonials,searchProducts,addToCart,updateCart,getUserCart,myOrders,placeOrder,contactUs,fetchBlog,fetchProduct}