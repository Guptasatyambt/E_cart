const mongoose=require("mongoose");
const items=require('./items');


const sellerSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    name:{  
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    profileimage:{
        type:String,
        require:true,
    },
    adress:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: items,
    }],
},{timestamps:true});

const SELLER=mongoose.model('seller',sellerSchema);

module.exports=SELLER;