const {setuser}=require('../service/auth')
const User=require('../models/usermodel');
const Item=require('../models/items');
const bycrpt=require('bcrypt');
const fs=require('fs')
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;




async function handleregister(req,res){
    const{email,password} =req.body
    if(!email||!password){
        return res.status(400).json("All field are compulsory");
    }
    try{
    const allReadyExist=await User.findOne({email})
    if(allReadyExist){
        return res.status(400).json("User Exist")
    }
    const bycrptpassword=await bycrpt.hash(password,10)
    const user=await User.create({
        name:"",
        email:email,
        password:bycrptpassword,
        profileimage:"",
    })
   
    const token=setuser(user);
    return res.status(200).json({message:"Success",data:{token,id:user.id,name:""}});
}
catch(e){
    res.status(500).json({ message: "Error adding item to cart", error: e.message });
}
    }
     
    async function handledetails(req,res){
        const {name}=req.body
        if(!name&&req.file){
            return res.status(400).json("All field are compulsory");
        }
        const user=req.user;
    const email=user.email;
    const password=user.password;
    try{
   const updateduser= await User.findByIdAndUpdate(user._id,
        {$set:{
        name:name,
        email:email,
        password:password,
        profileimage:req.file.path,
    }}
    ,{new:true})
    res.status(200).json({message:"Success",data:{updateduser}});
}
catch(e){
    res.status(500).json({ message: "Error adding item to cart", error: e.message });
}
    }

    async function handlelogin(req,res){
        const {email,password}=req.body;
        if(!email ||!password){
            res.status(400).json({message:"enter details correctly"})
            // throw new Error("enter details correctly")
        }
        try{
        const user=await User.findOne({email})
        if(!user){
            res.status(404).json({message:"User not exist! please sign In"})
            // throw new Error("User not exist! please sign In")
        }
        if(user&& (await bycrpt.compare(password,user.password))){
            const token=setuser(user);
            res.status(200).json({message:"Success",data:{token,id:user.id,name:user.name}});
        }
        else{
            res.status(400).json({message:"Incorrect password"})
        }
    }
    catch(e){
        res.status(500).json({ message: "Error adding item to cart", error: e.message });
    }
    }

    async function getinfo(req,res){
        
        try{
            const email=req.user.email;
            const user=await User.findOne({email})
            return res.status(200).json(user);
        }catch(e){
            res.status(500).json({ message: "Error adding item to cart", error: e.message });
        }
    }

    async function addcart(req, res) {
        try {
            const {_id, number } = req.body;
    
            // Check if itemId and number are provided
            if (!_id || !number) {
                return res.status(400).json({ message: "Item ID and number are required" });
            }
    
            const email = req.user.email;
             
            // Validate if the item exists
             
        
            if (!item) {
               return res.status(404).json({ message: "Item not found" });
            }
    
            // Find the user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Update the user's cart using atomic operation
            await User.updateOne(
                { email },
                { $push: { cart: { _id:_id, number: number } } }
            );
    
            // Fetch the updated user document
            const updatedUser = await User.findOne({ email });
    
            res.status(200).json({ message: "Success", data: { email: email, cart: updatedUser.cart } });
        } catch (error) {
            res.status(500).json({ message: "Error adding item to cart", error: error.message });
        }
    }


    
    module.exports={handleregister,handledetails ,handlelogin,getinfo,addcart};