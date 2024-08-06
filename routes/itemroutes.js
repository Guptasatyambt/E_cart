const express = require('express');
const{handleAdd,getItemInfo,deleteitem}=require('../controller/itemcontroller')
const{validation}=require('../service/auth')
const upload=require('../middleware/uploads');
const router=express.Router();

router.post('/addnewitem',validation,upload.array("images",5),handleAdd); // send "email" and "password" in post request //sent "images" and "name" and "token" in post request
router.get('/getiteminfo',getItemInfo) // sent item id in get request 
router.delete('/deleteitem',validation,deleteitem)
//make query routes for categary and price

module.exports=router