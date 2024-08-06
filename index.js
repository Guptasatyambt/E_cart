const express=require("express");
require("dotenv").config();
const path=require('path');
const userroutes=require('./routes/userroutes')
const itemroutes=require('./routes/itemroutes')
const orderroutes=require('./routes/orderroutes');
const sellerroutes=require('./routes/sellerroutes')
const bodyParser = require('body-parser');
const {ConnectionDB}=require('./connection');
const{validation}=require('./service/auth')


const app=express();
const port=process.env.PORT;
ConnectionDB(process.env.MONGO_URL)


app.use(express.json());
app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
      res.status(400).json({ error: 'Invalid JSON' });
    } else {
      next();
    }
  });
  
app.use(express.urlencoded({extended:false}));


app.use('/api/v1/profileimage',express.static('profileimage'))
app.use('/api/v1/user',userroutes);
app.use('/api/v1/item',itemroutes);
app.use('/api/v1/seller',sellerroutes);
app.use('/api/v1/order',orderroutes);
// app.use('/feedback',feedbackroute)
// app.use('/interview',validation,interviewroute)
// app.use(cookieParser());


app.listen(port ,()=>{
    console.log(`server started at port ${port}`)
})
    