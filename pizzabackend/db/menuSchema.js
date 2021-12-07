const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    pizza_id:{
        type:Number,
        required:true,
        unique:true
    },
    pizza_name:{
        type:String,
        required:true,
        unique:true
    },
    pizza_image:{
        type:String,
        required:true
    },
    price:{type:Number,required:true},
    toppings:{
        type:String,required:true
    }
})
module.exports=mongoose.model("pizzamenu",menuSchema)