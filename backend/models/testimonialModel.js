import mongoose from "mongoose";

const testimonialSchema=mongoose.Schema({
    avatar:{
        type:String,
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    testimonial:{
        type:String,
        required:true
    }
},{minimize:false,timestamps:true});

const testimonialModel=mongoose.models.testimonial || mongoose.model("testimonial",testimonialSchema)

export default testimonialModel;