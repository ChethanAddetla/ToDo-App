const express = require("express");
const User = require("../models/user");
const userRoutes = express.Router();
const bcrypt = require("bcrypt");

userRoutes.post('/signup',async (req,res)=>{
    try{
        // const {email,username,password}= req.body;
        let userData = await User.find();
        let x = userData.filter(item => item.email == req.body.email);
    if(x.length === 0){
        req.body.password = await bcrypt.hash(req.body.password,10);
        // const user = new User({email,username,password:encPass});
        const user = new User({...req.body});
        await user.save().then(()=>{
            res.status(200).json({user : user});
        });
    }
    else{
        res.status(400).json({msg :"email already exit"});
    }
    }
    catch(error){
        console.log(error);
        res.status(400).json({msg : error});
    }


});

userRoutes.post("/login",async(req,res)=>{
    try{
        if(!req.body.email || !req.body.password){
            res.status(400).json({msg : "Email and Password are required"});
        }
        else{

        
    let userData = await User.findOne({email : req.body.email});
    if(!userData){

        res.status(400).json({msg : "Email doesn't exit"});
    }
    else{
        const result = await bcrypt.compare(req.body.password,userData.password);
        if(result){
            res.status(200).json({msg:"Login Successful"});
        }
        else{
            res.status(400).json({msg:"Wrong Password",user : req.body.password,result});
        }
    }
}

   }
catch(error){
    res.status(400).json({msg:"Error in Login"});
}


})

module.exports = userRoutes;