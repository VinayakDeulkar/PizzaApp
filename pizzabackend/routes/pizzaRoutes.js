const express=require('express');
const router=express.Router();
const pizzaModel=require('../db/menuSchema')
const orderModel=require('../db/orderSchema')
const jwt=require("jsonwebtoken")
const jwtSecret="asd889asdas5656asdas887"
function autenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    console.log('Token is here');
    console.log(token)
    if(token==null){
        res.json({"err":1,"msg":"Token not match"})
    }
    else {
        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                res.json({"err":1,"msg":"Token incorrect"})
            }
            else {
                pizzaModel.find({},(err,data)=>{
                    res.json({"err":0,"pizzaMenu":data})
                })
                next();
            }
        })
    }
}
router.get('/fetchMenu',autenticateToken,(req,res)=>{
    // pizzaModel.find({},(err,data)=>{
    //     res.json({"err":0,"pizzaMenu":data})
    // })
})
router.post('/Placeorder',(req,res)=>{
    let user=req.body.user;
    let pizza_name=req.body.pizza;
    let cost=req.body.cost;
    let ins=new orderModel({user:user,pizza_name:pizza_name,cost:cost})
    ins.save((err)=>{
        if(err){ res.json({err:1})}
        else{
            res.json({err:0})
        }
    })
})
router.post('/getorder',(req,res)=>{
    let user=req.body.email;
    orderModel.find({user:user},(err,data)=>{
        res.json({"odata":data})
    })
})
module.exports=router