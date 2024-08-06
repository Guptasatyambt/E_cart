const {setuser}=require('../service/auth')
const Seller=require('../models/sellermodel');
const bycrpt=require('bcrypt');
const fs=require('fs')




async function handleregister(req,res){
    const{email,password} =req.body
    if(!email||!password){
        return res.status(400).json("All field are compulsory");
    }
    const allReadyExist=await Seller.findOne({email})
    if(allReadyExist){
        return res.status(400).json("User Exist")
    }
    const bycrptpassword=await bycrpt.hash(password,10)
    const seller=await Seller.create({
        name:"",
        email:email,
        password:bycrptpassword,
        profileimage:"",
        adress:"",
        mobile:"",
        items:[],
    })
   
    const token=setuser(seller);
    return res.status(200).json({message:"Success",data:{token,id:seller.id,name:""}});
    }
     
    async function handledetails(req,res){
        const {name,adress,mobile}=req.body
        if(!name||!mobile||!adress||!req.file){
            return res.status(400).json("All field are compulsory");
        }
        const seller=req.user;
    const email=seller.email;
    const password=seller.password;
   const updatedseller= await Seller.findByIdAndUpdate(seller._id,
        {$set:{
        name:name,
        email:email,
        password:password,
        profileimage:req.file.path,
        adress:adress,
        mobile:mobile,
        items:seller.items,
    }}
    ,{new:true})
    res.status(200).json({message:"Success",data:{updatedseller}});
    }

    async function handlelogin(req,res){
        const {email,password}=req.body;
        if(!email ||!password){
            res.status(400).json({message:"enter details correctly"})
            // throw new Error("enter details correctly")
        }
    
        const seller=await Seller.findOne({email})
        if(!seller){
            res.status(404).json({message:"seller not exist! please sign In"})
            // throw new Error("User not exist! please sign In")
        }
        if(seller&& (await bycrpt.compare(password,seller.password))){
            const token=setuser(seller);
            res.status(200).json({message:"Success",data:{token,id:seller.id,name:seller.name}});
        }
        else{
            res.status(400).json({message:"Incorrect password"})
        }
    }

    async function getinfo(req,res){
        
        try{
            const email=req.user.email;
            const seller=await Seller.findOne({email})
            return res.status(200).json(seller);
        }catch(e){
             res.status(401).json({message:"sorry"})
        }
    }

    


    
    module.exports={handleregister,handledetails ,handlelogin,getinfo};