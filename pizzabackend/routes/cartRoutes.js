const express=require('express');
const router=express.Router();
const cartModel=require('../db/cartSchema')
router.post('/addcart',(req,res)=>{
    let pizza_id=req.body.pizza_id;
    let pizza_name=req.body.pizza_name;
    let pizza_image=req.body.pizza_image;
    let price=req.body.price;
    let quantity=req.body.quantity;
    let toppings=req.body.toppings;
    let user=req.body.user;
    let ins=new cartModel({pizza_id:pizza_id,pizza_name:pizza_name,pizza_image:pizza_image,price:price,quantity:quantity,toppings:toppings,user:user})
    ins.save((err)=>{
        if(err){ res.json({err:1})}
        else{
            res.json({err:0})
        }
    })
})
router.post('/addquantity',(req,res)=>{
    let data=req.body.pizzaid
    console.log(data);
    cartModel.updateOne({pizza_id:data},{$inc:{quantity:+1}},(err)=>{
        if(err){ console.log(err)}
    })
})
router.post('/getCart',(req,res)=>{
    let email=req.body.email
    console.log(email);
    cartModel.find({user:email},(err,data)=>{
        console.log(data);
        if(err) {
            console.log(err)}
            else{
                res.json({cartdata:data})
            }

    })
})
router.post('/deletepizza',(req,res)=>{
    let user=req.body.user;
    let pizza_id=req.body.pizza_id;
    console.log('delete');
    console.log(user);
    console.log(pizza_id);
    
    cartModel.deleteOne({$and:[{pizza_id:pizza_id},{user:user}]},(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json({err:0})
        }
    })

})
router.post('/Placeorder',(req,res)=>{
    console.log('hello');
    let user=req.body.email;
    console.log(user);
    cartModel.deleteMany({user:user},(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json({err:0})
        }
    })
})
module.exports=router