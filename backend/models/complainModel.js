import mongoose from "mongoose";

const complainSchema=mongoose.Schema({
    avatar:{type:String},
    username:{type:String},
    email:{type:String},
    complain:{type:String, required:true}
},{minimize:false});

const complainModel=mongoose.models.complain || mongoose.model("complain",complainSchema);

export default complainModel;