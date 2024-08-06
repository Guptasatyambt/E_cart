// make order item id, userid, quantity, total cost
// make order delieverd make true
// order cancelled delete order 
//get info of order

const express = require('express');
const{handleorder,handledelievery,handlecancel,getorderinfo}=require('../controller/ordercontroller')
const{validation}=require('../service/auth')
const router=express.Router();

router.post('/makeorder',handleorder); // send "userid","itemid" and "quantity","sellerid", "orderdate" in post request
router.post('/orderdelievered',handledelievery) //sent "orderid" and "delieverydate" 
router.post('/cancelorder',handlecancel) // send "orderid"  in post request
router.get('/getinfo',getorderinfo) // sent orderid in get request 



module.exports=router