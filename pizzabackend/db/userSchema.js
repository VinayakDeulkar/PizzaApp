const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("userdata",userSchema)