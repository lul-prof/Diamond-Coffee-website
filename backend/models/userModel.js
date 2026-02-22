import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    avatar:{type:String, required:false,default:"https://cdn.dribbble.com/userupload/43701429/file/original-ef2b5daed38ae8cceb4f65ca54b1d403.png?resize=752x&vertical=center"},
    username:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>6
            },
            message:"usernames must be longer than 5 character"
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:{
            validator:(value)=>{
                //simple email regex
                const emailRegex=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                return value.match(emailRegex);
            },
            message:'Please enter a valid email address',
        }
    },
    phone:{
        type:String,
        required:true
    },
    county:{
        type:String,
        required:true
    },
    category:{type:String,required:true},
    password:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>5
            },
            message:"password length must be longer than 5 character"
        }
    },
    cartData:{type:Object,default:{}},
    createdAt:{
        type:Date,
        default: new Date()
    },
},{minimize:false,timestamps:true})


const userModel=mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;