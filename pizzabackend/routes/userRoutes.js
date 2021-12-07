const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken")
const jwtSecret="asd889asdas5656asdas887"
const {check,validationResult}=require('express-validator')
const userModel=require('../db/userSchema')
router.post('/adduser',[
    check('Name','Name must be 3+ characters')
    .exists()
    .isString()
    .isLength({min:3}),
    check('Email','Enter Valid email')
    .exists()
    .isEmail(),
    check('MobileNumber','Enter Valid Mobile Number')
    .isNumeric()
    .isLength({min:10,max:10})
    .exists(),
    check('Address','Enter valid Address')
    .isString()
    .isLength({min:10}),
    check('Password','password must be 8 characters')
    .isString()
    .isLength({min:8})
],(req,res)=>{
    const errors=validationResult(req)
    console.log(errors);
    if(!errors.isEmpty()){
        let alert=errors.array()
        userModel.find({},(err,data)=>{
            if(err) throw err;
            res.json({data:data,alert})
        })
    }
    else{
        let UserName=req.body.Name;
        let Email=req.body.Email;
        let MobileNumber=req.body.MobileNumber;
        let Address=req.body.Address;
        let Password=req.body.Password;
        let ins=new userModel({user_name:UserName,email:Email,mobilenumber:MobileNumber,streetAddress:Address,password:Password})
        ins.save((err)=>{
            if(err){ res.json({err:1})}
            else{
                res.json({err:0})
            }
        })

    }
})
router.post('/checkuser',(req,res)=>{
    let username=req.body.Email;
    let Password=req.body.Password;
    userModel.find({$and:[{email:{$eq:username}},{password:{$eq:Password}}]},(err,data)=>{
        if(data[0]==null){
            res.json({err:1,"msg":"Email or password is not correct"})
        }
        else{
            let payload={uid:data}
            const token=jwt.sign(payload,jwtSecret,{expiresIn:360000})
            res.json({"err":0,"msg":"Login Success","token":token})
        }
    })
})
module.exports=router