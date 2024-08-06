const mongoose=require("mongoose");
const items=require('./items');
const user=require('./usermodel')
const seller=require('./sellermodel')

const orderSchema=new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
    },
    sellerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: seller,
    },
    itemid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: items,
    },

    delieverydate:{
        type:Date,
        require:true,
    },
    isdelevered:{
        type:Boolean,
        default:false,
    },
    quantity:{
        type:Number,
        default:1
    }
},{timestamps:true});

const ORDER=mongoose.model('order',orderSchema);

module.exports=ORDER;