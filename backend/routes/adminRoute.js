import express from 'express'
import { addBlog, addProduct, deleteBlog, deleteProduct, deleteUser, fetchUsers, updateBlog, updateProduct, updateUser } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter=express.Router();

/*--------Blogs---------*/
adminRouter.post('/addBlog',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:2}]),addBlog);
adminRouter.get('/deleteBlog/:blogId',deleteBlog);
adminRouter.post('/updateBlog/:blogId',updateBlog);

/*--------Products---------*/
//http://localhost:3000/api/admin/deleteProduct/6995a602d2841e3bb4c83465
adminRouter.post('/addProduct',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:2},{name:'image3',maxCount:3},{name:'image4',maxCount:4}]),addProduct);//This route will receive multiple file inputs
adminRouter.get('/deleteProduct/:productId',deleteProduct);
adminRouter.post('/updateProduct/:productId',updateProduct);



/*--------Users---------*/
adminRouter.get('/users',fetchUsers);
adminRouter.get('/deleteUser/:userId',deleteUser);
adminRouter.post('/updateUser/:userId',updateUser);

export default adminRouter;