// create seller
// login
// update
// get info
const express = require('express');
const{handleregister,handledetails,handlelogin,getinfo}=require('../controller/sellercontroller')
const{validation}=require('../service/auth')
const upload=require('../middleware/uploads');
const router=express.Router();

router.post('/signin',handleregister); // send "email" and "password" in post request
router.post('/uploadinfo',validation,upload.single('profileimage'),handledetails) //sent "profileimage" and "name" and "token" in post request
router.post('/login',handlelogin) // send "email" and "password" in post request
router.get('/getinfo',validation,getinfo) // sent bearer token in get request 



module.exports=router