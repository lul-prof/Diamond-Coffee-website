//imports
import express from 'express'
import "dotenv/config";
import cors from 'cors'
import DbConnect from './config/MongoDB.js';
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js';
import connectCloudinary from './config/cloudinary.js';


//configurations
const app=express();
const port=3000;

DbConnect()
connectCloudinary()



//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes


app.get('/',(req,res)=>{
    res.send("App Running")
});

//user
app.use('/api/user',userRouter);


//admin
app.use('/api/admin/',adminRouter);

app.listen(port,()=>{
    console.log(`App Running on port ${port}`)
});