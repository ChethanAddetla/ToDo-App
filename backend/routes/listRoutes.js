const express = require("express");
const listRoutes  = express.Router();

const User = require("../models/user");
const List = require("../models/list");


listRoutes.post("/addTask",async(req,res)=>{
try{
    const {title,body,email} = req.body;
    const existingUser = await User.findOne({email})
    if(existingUser){
        const list = new List({title,body,user :existingUser });
        await list.save();
        existingUser.list.push(list); //** */
        existingUser.save();

        res.status(200).json({msg:"List item added successfully",list,existingUser})
    }
    else{
        res.status(400).json({msg:"Email does not exit"});
    }
}
catch(error){
    console.log(error);
    res.status(400).json({msg:"error"});
}
})



listRoutes.put("/updateTask/:id",async(req,res)=>{
    try{
        const {title,body,email} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
           const newList =  await List.findByIdAndUpdate(req.params.id,{title,body},{new:true});
            res.status(200).json({msg:"Update Successfull",newList});
        }
        else{
            res.status(400).json({msg:"Email does not exit"});
        }
        
    }
    catch(error){
        console.log(error);
    res.status(400).json({msg:"error"});
    }
})

listRoutes.delete("/deleteTask/:id",async(req,res)=>{
    try{
        const {email} = req.body;
        const existingUser = await User.findOneAndUpdate(
            {email},
            {$pull:{list:req.params.id}} //*** */
        );
        if(existingUser){
           const newList =  await List.findByIdAndDelete(req.params.id);
            res.status(200).json({msg:"Deletion Successfull",newList});
        }
        else{
            res.status(400).json({msg:"Email does not exit"});
        }
        
    }
    catch(error){
        console.log(error);
    res.status(400).json({msg:"error"});
    }
})

listRoutes.get("/getTasks/:id",async(req,res)=>{
    try{

    
    const list = await List.find({user:req.params.id}).sort({created:-1}); ///
    
    if(list.length !== 0){
        res.status(200).json({list})
    }
    else{
        res.status(200).json({msg :"No Tasks"})
    }

   
}
catch(error){
    console.log(error);
}
})


module.exports = listRoutes;