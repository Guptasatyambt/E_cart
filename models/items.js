const mongoose=require("mongoose");
const itemSchema=new mongoose.Schema({
    type:{
        type:String,
        require:true,
    },
    size:{  
        type:String,
        require:true,
    },
    quantity:{
        type:String,
        require:true,
    },
    images:[{
        type:String,
        require:true,
    }],
    color:{
        type:String,
        require:true,
    },
    owner_id:{
        type:String,
        require:true
    }
    
},{timestamps:true});

const ITEM=mongoose.model('item',itemSchema);

module.exports=ITEM;