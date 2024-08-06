
const Item=require('../models/items');
const Seller=require('../models/sellermodel');
const fs=require('fs')




async function handleAdd(req, res) {
    const { type, size, quantity, color } = req.body;
  
    // Check if any field is missing
    if (!type || !size || !quantity || !color || !req.files || req.files.length === 0) {
      return res.status(400).json("All fields are compulsory and at least one file must be uploaded.");
    }
  
    try {
      const user=req.user;
      const email=user.email;
      const seller=await Seller.findOne({email})
      if(!seller){
        return res.status(401).json({ message: "No Seller found" });
      }
      // Assuming 'images' is an array of file paths
      const images = req.files.map(file => file.path);
  
      // Create the item
      console.log("k");
      const item = await Item.create({
        type: type,
        size: size,
        quantity: quantity,
        color: color,
        images: images, // Store all file paths
        owner_id: req.user.id,
      });
  
      // Respond with success message
      return res.status(200).json({ message: "Success", data: { id: item.id } });
    } catch (error) {
      // Handle any errors that occur during item creation
      return res.status(500).json({ message: "An error occurred while adding the item", error: error.message });
    }
  }
  
  

   

    async function getItemInfo(req, res) {
        try {
          const { itemid } = req.body;
      
          // Check if 'id' is present in the request body
          if (!itemid) {
            return res.status(400).json({ message: "All fields are compulsory" });
          }
      
          // Find the item by id
          const item = await Item.findById(itemid);
      
          // Check if the item exists
          if (!item) {
            return res.status(404).json({ message: "Item not found" });
          }
      
          // Return the item
          return res.status(200).json(item);
        } catch (e) {
          // Catch any errors that occur during the item retrieval
          return res.status(500).json({ message: "Sorry, an error occurred", error: e.message });
        }
      }
      
    async function deleteitem(req,res){
        try{
            const {itemid}=req.body;
            await Item.findByIdAndDelete(itemid)
            return res.status(200).json({ message: "Deleted Sucessfully" });
        }catch(e){
             res.status(401).json({message:"sorry"})
        }
    }



    
    module.exports={handleAdd,getItemInfo,deleteitem};