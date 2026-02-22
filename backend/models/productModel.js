import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
   images:{type:Object,default:{}},
   title:{type:String, required:true},
   description:{type:String,required:true},
   quantity:{type:Number,required:true},
   price:{type:Number,required:true},
   dateAdded:{type:Date,default: new Date()} 
},{minimize:false}) //minimize controls auto removal of empty nested objects during saving

const productModel=mongoose.models.product || mongoose.model("product",productSchema)

export default productModel
