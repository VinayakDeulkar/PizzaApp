const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    pizza_id:{
        type:Number,
        required:true
    },
    pizza_name:{
        type:String,
        required:true
    },
    pizza_image:{
        type:String,
        required:true
    },
    price:{type:String,required:true},
    quantity:{type:Number,required:true},
    toppings:{
        type:String,required:true
    },
    user:{type:String,required:true}
})
module.exports=mongoose.model("cart",cartSchema)