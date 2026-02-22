import blogModel from '../models/blogModel.js'
import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';


/*--------------BLOG---------------*/
const addBlog=async(req,res)=>{
    try {
        const {title,description}=req.body;

        if (!req.files) {
        return res.status(400).json({success: false, message: "No files uploaded"});
        }
        
        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];

        const images=[image1,image2]

        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(
                    item.path,{
                        folder:"blog_images",
                        resource_type:'image'})
                return result.secure_url
            })
        )

        const new_blog=blogModel({
            images:imagesUrl,
            title,
            description
        });

        const blog=await new_blog.save();

        res.json({
            success:true,
            message:"Blog added Successfully",
            blog
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

const deleteBlog=async(req,res)=>{
    try {
        const blogId=req.params.blogId;

        const deletedBlog=await blogModel.findByIdAndDelete({_id:blogId});

        if(!deletedBlog){
            return res.json({
                success:false,
                message:"Blog does not exist."
            })
        }

        res.json({
            success:true,
            message:"Blog deleted successfully."
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

const updateBlog=async(req,res)=>{
    try {
        const {title,description}=req.body;
        const {blogId}=req.params.blogId;
        const blog=await blogModel.findByIdAndUpdate( {_id:blogId},
            {
            title:title,
            description:description
            },
            {new:true}
        );
        if(!blog){
            return  res.json({
                success:false,
                message:"Could not update blog."
            });
        }
        res.json({
            success:true,
            message:"Blog Updated Successfully"
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}


/*--------------PRODUCT---------------*/

const addProduct=async(req,res)=>{
    try {
        const {title,description,quantity,price}=req.body;

        if (!req.files) {
        return res.status(400).json({success: false, message: "No files uploaded"});
        }
        
        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];
        const image3=req.files.image3 && req.files.image3[0];
        const image4=req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item !== undefined)

        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(
                    item.path,{
                        folder:"product_images",
                        resource_type:'image'})
                return result.secure_url
            })
        )

        const new_product=new productModel({
            images:imagesUrl,
            title,
            description,
            quantity,
            price
        });

        const product=await new_product.save()

        if(!product){
            return res.json({
                success:false,
                message:"Failed to add product"
            })
        }

        res.json({
            success:true,
            message:"Product added successfully",
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


const deleteProduct=async(req,res)=>{
    try {
        const productId=req.params.productId;
        const deletedProduct=await productModel.findByIdAndDelete({_id:productId});

        if(!deletedProduct){
            return res.json({
                success:false,
                message:"Product not found"
            });
        }
        res.json({
            success:true,
            message:"Product deleted successfully",
            deleteProduct
        });

        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

const updateProduct=async(req,res)=>{
    try {
        const {title,description,quantity,price}=req.body;
        const productId=req.params.productId;

        const updated_product=await productModel.findByIdAndUpdate(
            {_id:productId},
            {
                title,
                description,
                quantity,
                price
            },
            {new:true}
        );

        if(!updated_product){
            return res.json({
                success:false,
                message:"Product not found"
            });
        }
        res.json({
            success:true,
            message:"Product updated successfully."
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

/*------------------USER MANAGEMENT-----------------*/
const fetchUsers=async(req,res)=>{
    try {
        const users=await userModel.find({})
        if(!users){
            return res.json({
                success:false,
                message:"Could not fetch users try again letter."
            });
        }
        res.json({
            success:true,
            message:"Fetched users successfully",
            users
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
        
    }
}

const deleteUser=async(req,res)=>{
    try {
        const userId=req.params.userId;

        const deletedUser=await userModel.findByIdAndDelete({_id:userId});
        if(!deleteUser){
            return res.json({
                success:false,
                message:"Could not delete user"
            });
        }
        res.json({
            success:true,
            message:"User deleted Successfully",
            deletedUser
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}


const updateUser=async(req,res)=>{
    try {
        const {username,email,county,phone,category,password}=req.body;
        const userId=req.params.userId;
        const salt=await bcrypt.genSalt(10);
        const hash_pw=await bcrypt.hash(password,salt);
        const updated_user=await userModel.findByIdAndUpdate(
            {_id:userId},
            {
                username,
                email,
                county,
                phone,
                category,
                password:hash_pw,
            },
            { returnDocument:'after' }
        );
        if(!updated_user){
            return res.json({
                success:false,
                message:"Could not update user"
            });
        }
        res.json({
            success:true,
            message:"User updated successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        });
    }
}

export {addBlog,deleteBlog,updateBlog,addProduct,deleteProduct,updateProduct,fetchUsers,deleteUser,updateUser}