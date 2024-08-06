const mongoose=require("mongoose");
const items=require('./items');

const userSchema=new mongoose.Schema({
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
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: items,
        number:Number
    }],
},{timestamps:true});

const USER=mongoose.model('user',userSchema);

module.exports=USER;