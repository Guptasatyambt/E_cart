
const Order=require('../models/ordermodel');
const Item=require('../models/items')
const fs=require('fs')



 // send "userid","itemid" and "quantity","sellerid", "orderdate" in post request
async function handleorder(req, res) {
    const { userid, _id, quantity, sellerid } = req.body;
  
    // Check if any field is missing
    if (!userid || !_id || !quantity || !sellerid  ) {
      return res.status(400).json("All fields are compulsory.");
    }
    
    try { 
      const item = await Item.findOne({_id})
      console.log(item);
      const available_quantity=item.quantity
      
      if(available_quantity<quantity){
        return res.status(201).json("Available quantity is less than order value");
      }
      
      const updated_item=await Item.findByIdAndUpdate(_id,
        {$set:{
        quantity:(available_quantity-quantity),
    }}
    ,{new:true})
      // Create the order
      const order = await Order.create({
        userid: userid,
        sellerid: sellerid,
        itemid: _id,
        delieverydate: "", // Store all file paths
        quantity: quantity,
      });
  
      // Respond with success message
      return res.status(200).json({ message: "Success", data: { id: order.id } });
    } catch (error) {
      // Handle any errors that occur during item creation
      return res.status(500).json({ message: "An error occurred while adding the item", error: error.message });
    }
  }
  async function handledelievery(req,res){
    const { orderid, delieverydate } = req.body;
    try{
    const updatedorder=await Order.findByIdAndUpdate(orderid,
      {$set:{
      isdelevered:true,
      delieverydate:delieverydate,
  }}
  ,{new:true})

  return res.status(200).json({ message: "Success", data: { updatedorder } });
}
catch(e){
  return res.status(500).json({ message: "An error occurred while adding the item", error: e.message });
}
  }

    async function getorderinfo(req, res) {
        try {
          const { orderid } = req.body;
      
          // Check if 'id' is present in the request body
          if (!orderid) {
            return res.status(400).json({ message: "All fields are compulsory" });
          }
      
          // Find the item by id
          const order = await Order.findById(orderid);
      
          // Check if the item exists
          if (!order) {
            return res.status(404).json({ message: "Item not found" });
          }
      
          // Return the item
          return res.status(200).json(order);
        } catch (e) {
          // Catch any errors that occur during the item retrieval
          return res.status(500).json({ message: "Sorry, an error occurred", error: e.message });
        }
      }
      
    async function handlecancel(req,res){
        try{
            const {orderid}=req.body;
            await Order.findByIdAndDelete(orderid)
            return res.status(200).json({ message: "Order cancelled" });
        }catch(e){
             res.status(401).json({message:"sorry"})
        }
    }



    
    module.exports={handleorder,handledelievery,handlecancel,getorderinfo};