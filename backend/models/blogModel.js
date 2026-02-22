import mongoose from 'mongoose'

const blogSchema=mongoose.Schema({
    images:{type:Object,default:{}},
    title:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>5
            },
            message:"Titles must be longer than 10 characters"
        }
    },
    description:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>15
            },
            message:"The character must be more than 15"
        }
    },
    dateCreated:{
        type:Date,
        default:Date.now
    }

},{minimize:false});

const blogModel=mongoose.models.blog || mongoose.model("blog", blogSchema)

export default blogModel;