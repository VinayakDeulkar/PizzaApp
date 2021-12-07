const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pizza_name:{
        type:Array,
        required:true
    },
    cost:{type:String,required:true},
    
})
module.exports=mongoose.model("order",orderSchema)